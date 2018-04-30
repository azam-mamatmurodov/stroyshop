from django.conf.urls import url

from rest_app.views import (
    CartViews,
    CartDeleteViews,
    CartDetailViews,
    CartUpdateViews,
    UserAuthView,
    UserRegisterView,
    UserUpdateView,
    ProductDetailView,
    VariationDetailView,
    PaycomView,
)
urlpatterns = [
    url(r'users/auth/$', UserAuthView.as_view(), name='user_auth'),
    url(r'users/register/$', UserRegisterView.as_view(), name='user_register'),
    url(r'users/(?P<user_id>[\d]+)/update/$', UserUpdateView.as_view(), name='user_update'),
    url(r'^cart/$', CartViews.as_view(), name='cart_list'),

    url(r'^cart/(?P<cart_item_id>[\d]+)/$', CartDetailViews.as_view(), name='cart_detail'),
    url(r'^cart/(?P<cart_item_id>[\d]+)/update/$', CartUpdateViews.as_view(), name='cart_update'),
    url(r'^cart/(?P<cart_item_id>[\d]+)/delete/$', CartDeleteViews.as_view(), name='cart_delete'),

    url(r'^products/(?P<pk>[\d]+)/$', ProductDetailView.as_view(), name='product_detail'),
    url(r'^products/(?P<pk>[\d]+)/variations/$', VariationDetailView.as_view(), name='product_variation_detail'),
    url(r'^payment/paycom/$', PaycomView.as_view(), name='paycom'),
]

