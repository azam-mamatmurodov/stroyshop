from decimal import Decimal
from django.views.generic import ListView, CreateView, DetailView

from main.modules import get_default
from orders.models import Cart, Order
from orders.forms import OrderForm
from users.forms import LoginForm

class CartView(ListView):
    model = Cart
    template_name = 'pages/cart.html'
    context_object_name = 'cart_items'

    def get_queryset(self):
        current_user_session_key = self.request.COOKIES.get('client_id')
        return self.model.objects.filter(session_key=current_user_session_key, status=True, order__isnull=True)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update(get_default(request=self.request))
        return context


class CheckoutView(CreateView):
    model = Order
    template_name = 'pages/checkout.html'
    form_class = OrderForm

    def get_cart_items(self, request):
        current_user_session_key = request.COOKIES.get('client_id')
        cart_items = Cart.objects.filter(session_key=current_user_session_key, status=True, order__isnull=True)
        return cart_items

    def get_context_data(self, **kwargs):
        cart_items = self.get_cart_items(self.request)

        context = super().get_context_data(**kwargs)
        context.update(get_default(request=self.request))
        context['cart_items'] = cart_items
        context['login_form'] = LoginForm()

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
        instance.save()
        return super().form_valid(form)


class OrderDetail(DetailView):
    template_name = 'pages/order_detail.html'
    model = Order

    def get_object(self, queryset=None):
        phone = self.kwargs.get('phone')
        pk = self.kwargs.get('pk')
        return self.model.objects.get(pk=pk, phone=phone)

    def get_context_data(self, **kwargs):

        context = super().get_context_data(**kwargs)
        context.update(get_default(request=self.request))
        return context
