from rest_framework import views, generics, status
from django.http.response import JsonResponse
from django.utils.translation import ugettext as _
from django.contrib.sessions.backends.signed_cookies import SessionStore

from rest_app.serializers import CartSerializer
from orders.models import Cart
from products.models import Variation

from decimal import Decimal


class CartViews(generics.ListAPIView, generics.CreateAPIView):
    serializer_class = CartSerializer
    queryset = None
    session_key = None
    model = Cart

    def get_cart_items(self):
        cart_instances = self.get_queryset()
        cart_items = []
        total_price = Decimal()
        for cart_instance in cart_instances:
            cart_items.append({
                'product': cart_instance.variation.product.name,
                'variation': cart_instance.variation.name,
                'count': cart_instance.count,
                'price': cart_instance.variation.price,
                'total_price': cart_instance.total_price,
            })
            total_price += Decimal(cart_instance.total_price)
        return {'total_price': "{:,}".format(int(total_price)).replace(',', ' '), 'items': cart_items}

    def get(self, request, *args, **kwargs):

        return JsonResponse(data=self.get_cart_items(), safe=False)

    def get_queryset(self):
        session_key = self.request.COOKIES.get('client_id')
        cart_instances = self.model.objects.filter(session_key=session_key, status=True, order__isnull=True)
        return cart_instances

    def create(self, request, *args, **kwargs):
        session_key = self.request.COOKIES.get('client_id')

        self.session_key = session_key
        variation_id = request.data.get('variation')
        quantity = int(request.data.get('count'))
        variation = Variation.objects.get(id=variation_id)

        total_price = Decimal(variation.price) * Decimal(quantity)

        new_cart_item, created = Cart.objects.get_or_create(session_key=self.session_key, variation=variation, order=None, defaults={
            "count": quantity,
            "total_price": total_price
        })
        if not created:
            new_cart_item.count += quantity
            new_cart_item.total_price = new_cart_item.count * new_cart_item.variation.price
            new_cart_item.save()
            msg = _('Cart successfully updated')

        else:
            msg = _('Successful added')
        message = {
            'status': 'success',
            'message': _(msg)
        }
        return JsonResponse(data=message)


class CartDeleteViews(generics.DestroyAPIView):
    serializer_class = CartSerializer
    queryset = None
    model = Cart
    lookup_field = "variation_id"

    def get_object(self):
        session_key = self.request.COOKIES.get('client_id')
        variation = Variation.objects.get(id=self.kwargs.get('variation_id'))
        cart_item = Cart.objects.get(session_key=session_key, variation=variation)
        return cart_item

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        msg = {
            'message': _('Successful removed'),
            'status': 'success'
        }
        return views.Response(data=msg, status=status.HTTP_204_NO_CONTENT)


class CartUpdateViews(generics.UpdateAPIView):
    serializer_class = CartSerializer
    queryset = None
    model = Cart
    lookup_field = "variation_id"

    def get_object(self):
        session_key = self.request.COOKIES.get('client_id')
        variation = Variation.objects.get(id=self.kwargs.get('variation_id'))
        cart_item = Cart.objects.get(session_key=session_key, variation=variation)
        return cart_item

    def update(self, request, *args, **kwargs):
        count = request.data.get('count')
        instance = self.get_object()
        instance.count = count
        instance.set_total_price(count)

        self.perform_update(instance)
        msg = {
            'message': _('Successful saved'),
            'status': 'success'
        }
        return views.Response(data=msg, status=status.HTTP_202_ACCEPTED)
