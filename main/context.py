from orders.models import Cart


def cart(request):
    current_user_session_key = request.session._get_or_create_session_key()
    cart_items = Cart.objects.filter(session_key=current_user_session_key, status=True, order__isnull=True)
    cart_total_price = 0
    for cart_item in cart_items:
        cart_total_price += cart_item.total_price
    cart_total_count = cart_items.count()
    return locals()
