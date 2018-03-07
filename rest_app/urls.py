from django.conf.urls import url

from rest_app.views import CartViews, CartDeleteViews, CartUpdateViews

urlpatterns = [
    url(r'^cart/$', CartViews.as_view(), name='cart_list'),
    url(r'^cart/(?P<variation_id>[\d]+)/$', CartDeleteViews.as_view(), name='cart_delete'),
    url(r'^cart/(?P<variation_id>[\d]+)/update/$', CartUpdateViews.as_view(), name='cart_delete'),
]