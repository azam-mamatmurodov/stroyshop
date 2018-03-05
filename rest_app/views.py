from django.core.cache import cache

from rest_framework import views, generics

from rest_app.serializers import CartSerializer


class CartViews(generics.ListAPIView, generics.CreateAPIView):
    serializer_class = CartSerializer
    queryset = None

    def get_queryset(self):
        storage = self.request.session.get('cart') if 'cart' in self.request.session else []
        return storage

    def create(self, request, *args, **kwargs):
        storage = cache.ttl('cart', None)

        payload = {
            "variation_id": self.request.data.get('variation_id', 0),
            "quantity": self.request.data.get('quantity', 0),
            "client_id": self.request.data.get('client_id', 0)
        }

        if storage is None:
            cart = [payload,]
        else:
            cart = storage.append(payload)
        self.request.session['cart'] = cart
        return views.Response(data=cart, content_type='application/json')


class CartDetailViews(generics.UpdateAPIView, generics.DestroyAPIView, generics.RetrieveAPIView):
    serializer_class = CartSerializer
    queryset = None

    def get_queryset(self):
        storage = self.request.session.get('cart', [])
        return storage[0]

    def retrieve(self, request, *args, **kwargs):
        return views.Response(data=self.get_queryset()[0], content_type='application/json')
