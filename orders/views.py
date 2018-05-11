from decimal import Decimal
import uuid
from django.views.generic import ListView, CreateView, DetailView, FormView, TemplateView
from django.shortcuts import reverse, redirect
from django.core.urlresolvers import reverse_lazy

from orders.models import Cart, Order
from orders.forms import OrderForm
from users.forms import LoginForm, DeliveryAddressForm
from users.models import DeliveryAddress


class CartView(ListView):
    model = Cart
    template_name = 'pages/orders/cart.html'
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


class OrderAddressView(FormView):
    template_name = 'pages/orders/address.html'
    form_class = DeliveryAddressForm
    success_url = reverse_lazy('orders:address')

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
        if self.request.user.is_authenticated:
            context['delivery_addresses'] = DeliveryAddress.objects.filter(user=self.request.user)
        context['form_address'] = DeliveryAddressForm(self.request.POST or None)
        return context

    def form_valid(self, form):
        instance_form = DeliveryAddressForm(self.request.POST)
        instance = instance_form.save(commit=False)
        instance.user = self.request.user
        instance.save()
        return redirect(to=self.success_url)


class CheckoutView(TemplateView):
    template_name = 'pages/orders/checkout.html'

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
        context['form'] = DeliveryAddressForm(self.request.POST or None)
        return context

    def post(self, request, *args, **kwargs):
        if self.request.POST.get('is_submitted'):
            form = OrderForm(request.POST)
            cart_items = self.get_cart_items(self.request)
            total_price = 0
            instance = form.save(commit=False)
            json_data = []
            if self.request.user.is_authenticated:
                instance.customer = self.request.user
            for cart_item in cart_items:
                cart_item.order = instance
                total_price += cart_item.total_price
                cart_item.save()

                title = "{} {}".format(cart_item.variation.product.name, cart_item.variation.name)
                if cart_item.variation.color:
                    title = "{} {}".format(title, cart_item.variation.color.name)
                json_data.append({
                    'title': title,
                    'price': float(cart_item.variation.price),
                    'count': cart_item.count,
                    'total_price': float(cart_item.total_price)
                })
            instance.products = json_data
            instance.total_price = Decimal(total_price)
            instance.order_unique_id = uuid.uuid4()
            instance.save()
            return redirect(to=reverse('orders:order_detail', args=[instance.phone, instance.order_unique_id]))
        else:
            return self.render_to_response(self.get_context_data(**kwargs))


class OrderDetail(DetailView):
    template_name = 'pages/order_detail.html'
    model = Order

    def get_object(self, queryset=None):
        phone = self.kwargs.get('phone')
        order_unique_id = self.kwargs.get('order_unique_id')
        return self.model.objects.get(order_unique_id=order_unique_id, phone=phone)


class OrderInvoiceDetail(DetailView):
    template_name = 'pages/invoice.html'
    model = Order

    def get_object(self, queryset=None):
        phone = self.kwargs.get('phone')
        order_unique_id = self.kwargs.get('order_unique_id')
        return self.model.objects.get(order_unique_id=order_unique_id, phone=phone)

