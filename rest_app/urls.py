from django.conf.urls import url

from rest_app.views import (
    CartViews,
    CartDeleteViews,
    CartUpdateViews,
    UserAuthView,
    UserRegisterView,
    UserUpdateView,
)

urlpatterns = [
    url(r'users/auth/$', UserAuthView.as_view(), name='user_auth'),
    url(r'users/register/$', UserRegisterView.as_view(), name='user_register'),
    url(r'users/(?P<user_id>[\d]+)/update/$', UserUpdateView.as_view(), name='user_update'),
    url(r'^cart/$', CartViews.as_view(), name='cart_list'),
    url(r'^cart/(?P<variation_id>[\d]+)/$', CartDeleteViews.as_view(), name='cart_delete'),
    url(r'^cart/(?P<variation_id>[\d]+)/update/$', CartUpdateViews.as_view(), name='cart_delete'),
]