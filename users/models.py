from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.conf import settings

from mptt.models import MPTTModel


class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, phone, password, **extra_fields):
        """Create and save a User with the given phone and password."""
        if not phone:
            raise ValueError('The given phone must be set')
        user = self.model(phone=phone, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, phone, password=None, **extra_fields):
        """Create and save a regular User with the given phone and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(phone, password, **extra_fields)

    def create_superuser(self, phone, password, **extra_fields):
        """Create and save a SuperUser with the given phone and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(phone, password, **extra_fields)


class User(AbstractUser):
    username = None
    phone = models.CharField(max_length=12, unique=True, verbose_name=_('Phone number or Username'))
    first_name = models.CharField(max_length=30, blank=True, verbose_name=_('First name'))
    last_name = models.CharField(max_length=30, blank=True, verbose_name=_('Last name'))
    date_joined = models.DateTimeField(auto_now_add=True, verbose_name=_('Date joined'),)
    is_active = models.BooleanField(default=True, verbose_name=_('Active'),)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True, verbose_name=_('Avatar'), )

    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = ['first_name', ]
    objects = UserManager()

    class Meta:
        verbose_name = _('User')
        verbose_name_plural = _('Users')

    def __str__(self):
        return self.first_name if self.first_name else self.phone


class Client(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name='client', verbose_name=_('Client user'))
    address = models.TextField(blank=True, null=True, verbose_name=_('Client address'))

    def __str__(self):
        return "{}".format(self.user.username)


class Merchant(models.Model):
    PRODUCER = 1
    SUPPLIER = 2
    MERCHANT_TYPE = (
        (PRODUCER, _('Producer'),),
        (SUPPLIER, _('Supplier'),),
    )
    user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name='merchant', verbose_name=_('Merchant user'))
    merchant_type = models.IntegerField(choices=MERCHANT_TYPE, verbose_name=_('Merchant type'))

    def __str__(self):
        return "{}".format(self.user.first_name)