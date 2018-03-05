from django.conf.urls import url

from rest_app.views import CartViews, CartDetailViews

urlpatterns = [
    url(r'^cart/$', CartViews.as_view(), name='cart_list'),
    url(r'^cart/(?P<client_id>[\d]+)/(?P<variation_id>[\d]+)/$', CartDetailViews.as_view(), name='cart_detail'),
]