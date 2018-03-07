from django.template.loader import render_to_string

from main.models import Menu, Banner
from products.models import Category
from orders.models import Cart


def get_breadcrumb(page_name, request):
    pass


def cart(request):
    current_user_session_key = request.COOKIES.get('client_id')
    cart_items = Cart.objects.filter(session_key=current_user_session_key, status=True, order__isnull=True)
    cart_total_price = 0
    for cart_item in cart_items:
        cart_total_price += cart_item.total_price
    cart_total_count = cart_items.count()
    return {
        'cart_items': cart_items,
        'cart_total_price': cart_total_price,
        'cart_total_count': cart_total_count
    }


def get_header(request):
    context = dict()
    context['menu_items'] = Menu.objects.all()
    context['category'] = Category.objects.all()
    context['request'] = request
    context['cart'] = cart(request)
    return render_to_string('parts/header.html', context=context)


def get_banner(request):
    context = dict()
    context['banner_items'] = Banner.objects.all()
    context['request'] = request
    return render_to_string('parts/banner.html', context=context)


def get_footer(request):
    context = dict()
    context['request'] = request
    return render_to_string('parts/footer.html', context=context)


def get_default(request):
    context = dict()
    context['header'] = get_header(request)
    context['banner'] = get_banner(request)
    context['footer'] = get_footer(request)
    return context
