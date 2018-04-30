from decimal import Decimal

from django.db import models
from django.utils.translation import ugettext as _
from django.db.models.signals import post_save
from django.conf import settings

from products.models import Variation


class Order(models.Model):
    ORDER_STATUS = (
        (0, _('Available')),
        (1, _('Awaiting Payment')),
        (2, _('Payment completed')),
        (3, _('Cancelled')),
        (4, _('Delivered')),
    )
    customer = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, null=True)
    client_name = models.CharField(verbose_name=_('Client name'), max_length=60, default='')
    phone = models.CharField(max_length=12, verbose_name=_('Phone number'))
    shipping_address = models.TextField(_('Shipping address'))
    total_price = models.DecimalField(null=True, blank=True, max_digits=10, decimal_places=2)
    created = models.DateTimeField(auto_now_add=True, )
    state = models.IntegerField(choices=ORDER_STATUS, default=ORDER_STATUS[0][0], blank=True)
    order_unique_id = models.CharField(unique=True, blank=True, null=True, max_length=120, verbose_name=_('Order Id'), editable=False)
    products = models.TextField(null=True, blank=True)

    def str(self):
        return "Order - {}".format(self.pk)

    def get_order_status(self, status_key):
        status_value = status_key
        for status in self.ORDER_STATUS:
            if status[0] == status_key:
                status_value = status[1]
                break
        return status_value

    @property
    def get_status(self):
        return self.ORDER_STATUS[self.state][1]

    def get_items(self):
        return self.cart_set.all()

    def get_total_price(self, obj):
        return obj.total_price * 100


# def order_save(sender, **kwargs):
#     if kwargs.get('created'):
#         instance = kwargs.get('instance')
#         cart_items = instance.cart_set.all()
#         json_data = []
#         for cart_item in cart_items:
#             title = "{} {}".format(cart_item.variation.product.name, cart_item.variation.name)
#             if cart_item.variation.color:
#                 title = "{} {}".format(title, cart_item.variation.color.name)
#             json_data.append({
#                 'title': title,
#                 'price': float(cart_item.variation.price),
#                 'count': cart_item.count,
#                 'total_price': float(cart_item.total_price)
#             })
#         print(json_data)
#         instance.products = json_data
#         # instance.save()


# post_save.connect(receiver=order_save, sender=Order)


class Cart(models.Model):
    session_key = models.CharField(max_length=255)
    variation = models.ForeignKey(to=Variation, )
    count = models.IntegerField()
    status = models.BooleanField(default=True)
    order = models.ForeignKey(Order, blank=True, null=True, )
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        verbose_name = _('Cart item')
        verbose_name_plural = _('Cart items')

    def __str__(self):
        return "{}".format(self.session_key)

    def set_total_price(self, count):
        self.total_price = Decimal(count) * self.variation.price