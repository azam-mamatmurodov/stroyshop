from decimal import Decimal
import uuid
from django.views.generic import ListView, CreateView, DetailView
from django.shortcuts import reverse, redirect

from orders.models import Cart, Order
from orders.forms import OrderForm
from users.forms import LoginForm
from users.models import DeliveryAddress


class CartView(ListView):
    model = Cart
    template_name = 'pages/cart.html'
    context_object_name = 'cart_items'

    def get_queryset(self):
        current_user_session_key = self.request.COOKIES.get('client_id')
        return self.model.objects.filter(session_key=current_user_session_key, status=True, order__isnull=True)

    def get_cart_items(self, request):
        current_user_session_key = request.COOKIES.get('client_id')
        cart_items = Cart.objects.filter(session_key=current_user_session_key, status=True, order__isnull=True)
        return cart_items

    def dispatch(self, request, *args, **kwargs):
        if self.get_cart_items(request=request).count() == 0:
            return redirect(reverse('main:home'))
        return super().dispatch(request=request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        cart_items = self.get_cart_items(self.request)
        total_amount = 0
        for cart_item in cart_items:
            total_amount += cart_item.total_price
        context = super().get_context_data(**kwargs)
        context['total_amount'] = total_amount
        return context


class CheckoutView(CreateView):
    model = Order
    template_name = 'pages/checkout.html'
    form_class = OrderForm
    success_url = None

    def get_cart_items(self, request):
        current_user_session_key = request.COOKIES.get('client_id')
        cart_items = Cart.objects.filter(session_key=current_user_session_key, status=True, order__isnull=True)
        return cart_items

    def dispatch(self, request, *args, **kwargs):
        if self.get_cart_items(request=request).count() == 0:
            return redirect(reverse('main:home'))
        return super().dispatch(request=request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        cart_items = self.get_cart_items(self.request)
        total_amount = 0
        for cart_item in cart_items:
            total_amount += cart_item.total_price
        context['total_amount'] = total_amount

        if self.request.user.is_authenticated:
            context['delivery_addresses'] = DeliveryAddress.objects.filter(user=self.request.user)
        context['login_form'] = LoginForm()
        context['default_address'] = DeliveryAddress.objects.filter(user=self.request.user, is_default=True).first()
        return context

    def form_valid(self, form):
        cart_items = self.get_cart_items(self.request)
        total_price = 0
        instance = form.save()
        if self.request.user.is_authenticated:
            instance.customer = self.request.user
        for cart_item in cart_items:
            cart_item.order = instance
            total_price += cart_item.total_price
            cart_item.save()
        instance.total_price = Decimal(total_price)
        instance.order_unique_id = uuid.uuid4()
        instance.save()
        return redirect(to=reverse('orders:order_detail', args=[instance.phone, instance.order_unique_id]))


class OrderDetail(DetailView):
    template_name = 'pages/order_detail.html'
    model = Order

    def get_object(self, queryset=None):
        phone = self.kwargs.get('phone')
        order_unique_id = self.kwargs.get('order_unique_id')
        return self.model.objects.get(order_unique_id=order_unique_id, phone=phone)

