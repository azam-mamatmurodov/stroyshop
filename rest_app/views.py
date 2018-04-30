from rest_framework.renderers import JSONRenderer
from rest_framework import views, generics, status, response, viewsets
from django.http.response import JsonResponse
from django.utils.translation import ugettext as _
from django.contrib.auth import authenticate, login

from rest_app.serializers import CartSerializer, ProductSerializer, VariationSerializer
from orders.models import Cart
from products.models import Variation, Product
from users.models import User, Client

from decimal import Decimal

from .paycom.Application import Application

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


class CartDetailViews(generics.RetrieveAPIView):
    serializer_class = CartSerializer
    queryset = None
    model = Cart
    lookup_field = "cart_item_id"

    def get_object(self):
        session_key = self.request.COOKIES.get('client_id')
        cart_item = Cart.objects.filter(session_key=session_key, id=self.kwargs.get('cart_item_id')).first()
        return cart_item


class CartDeleteViews(generics.DestroyAPIView):
    serializer_class = CartSerializer
    queryset = None
    model = Cart
    lookup_field = "cart_item_id"

    def get_object(self):
        session_key = self.request.COOKIES.get('client_id')
        cart_item_id = self.kwargs.get('cart_item_id')
        cart_item = Cart.objects.get(id=cart_item_id)
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
    lookup_field = "cart_item_id"

    def get_object(self):
        session_key = self.request.COOKIES.get('client_id')
        cart_item = Cart.objects.get(session_key=session_key, id=self.kwargs.get('cart_item_id'))
        return cart_item

    def update(self, request, *args, **kwargs):
        count = request.data.get('count')
        instance = self.get_object()
        instance.count = count
        instance.set_total_price(count)

        self.perform_update(instance)
        msg = {
            'message': _('Successful saved'),
            'status': 'success',
            'data': CartSerializer(instance=instance).data
        }
        return views.Response(data=msg, status=status.HTTP_202_ACCEPTED)


class UserAuthView(views.APIView):
    def post(self, request):
        if request.POST.get('username') and request.POST.get('passwd'):
            username = request.POST.get('username')
            passwd = request.POST.get('passwd')
            user = authenticate(request, username=username, password=passwd)
            if user:
                login(request, user)
                data = {
                    'status': 'success',
                    'message': 'Successful authenticated'
                }
            else:
                data = {
                    'status': 'failed',
                    'message': 'Invalid credentials'
                }
            return JsonResponse(data)
        return response.Response('Response')


class UserRegisterView(views.APIView):
    def post(self, request):
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        phone = request.POST.get('phone')
        address = request.POST.get('address')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        if first_name and last_name and phone and password and confirm_password:
            if User.objects.filter(phone=phone).exists():
                data = {
                    'status': 'failed',
                    'fields': [
                        {
                            'message': 'User already exists',
                            'field': 'phone'
                        },
                    ]
                }
            else:
                user = User.objects.create_user(phone=phone, password=password)
                user.first_name = first_name
                user.last_name = last_name
                user.save()
                client = Client()
                client.user = user
                if address:
                    client.address = address
                client.save()
                user = authenticate(request, username=phone, password=password)
                if user:
                    login(request, user)
                    data = {
                        'status': 'success',
                        'message': 'Successful registered'
                    }
                else:
                    data = {
                        'status': 'failed',
                        'message': 'Invalid credentials'
                    }
            return JsonResponse(data)
        return response.Response('Response')


class UserUpdateView(views.APIView):

    def post(self, request, *args, **kwargs):
        user_id = kwargs.get('user_id')
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            message = {'message': 'Sorry, something went wrong', 'status': 'fail'}
            return JsonResponse(data=message)
        import json
        available_fields = ['phone', 'first_name', 'last_name', 'password', 'password_old', 'address', 'email', ]
        data_list = request.POST.get('data')
        data = json.loads(data_list)
        if isinstance(data, list):
            field_name = data[0].get('field_name')
            field_data = data[0].get('field_data')
        else:
            field_name = data.get('field_name')
            field_data = data.get('field_data')

        if field_name in available_fields:
            if field_name == 'password_old':
                new_password = data[1].get('field_data')
                confirm_password = data[2].get('field_data')

                if user.check_password(field_data):
                    if new_password == confirm_password:
                        user.set_password(new_password)
                    else:
                        message = {'message': 'Sorry, wrong confirm password', 'status': 'fail'}
                        return JsonResponse(data=message)
                else:
                    message = {'message': 'Sorry, incorrect old password', 'status': 'fail'}
                    return JsonResponse(data=message)
            elif field_name == 'address':
                user.client.address = field_data
            else:
                setattr(user, field_name, field_data)
            message = {'message': 'Successfully updated', 'status': 'success'}
            user.save()
        else:
            message = {'message': 'Sorry, something went wrong', 'status': 'fail'}

        return JsonResponse(data=message)


class ProductDetailView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class VariationDetailView(generics.ListAPIView):
    serializer_class = VariationSerializer

    def get_queryset(self):
        variations = Variation.objects.filter(product_id=self.kwargs.get('pk'))
        name = self.request.GET.get('name')
        if name:
            variations = variations.filter(name=name)
        return variations


class PaycomView(views.APIView):
    def post(self, request):
        app = Application(request=request)
        response = app.run()
        import json
        new_data = json.loads(response)
        return JsonResponse(data=new_data, safe=False)