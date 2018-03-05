from django.db import models
from django.utils.translation import ugettext as _

from products.models import Variation


class Order(models.Model):
    pass


class Cart(models.Model):
    session_key = models.CharField(max_length=255)
    variation = models.ForeignKey(to=Variation, )
    count = models.IntegerField()
    status = models.BooleanField(default=True)
    order = models.ForeignKey(Order)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        verbose_name = _('Cart item')
        verbose_name_plural = _('Cart items')
