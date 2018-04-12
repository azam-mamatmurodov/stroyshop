from django.conf.urls import url
from users.views import (
    LoginView,
    RegisterView,
    ProfileView,
    ProfileSettingsView,
    ProfileOrdersView,
    ProfileDeliveryView,
    ProfilePaymentView
)
from django.contrib.auth.views import LogoutView
from django.contrib.auth.decorators import login_required

urlpatterns = [
    url(r'accounts/login/$', LoginView.as_view(), name='login', ),
    url(r'accounts/logout/$', login_required(LogoutView.as_view(next_page='/')), name='logout', ),
    url(r'accounts/register/$', RegisterView.as_view(), name='register', ),
    url(r'accounts/$', login_required(ProfileView.as_view()), name='profile', ),
    url(r'accounts/security/$', login_required(ProfileSettingsView.as_view()), name='profile_security', ),
    url(r'accounts/orders/$', login_required(ProfileOrdersView.as_view()), name='profile_orders', ),
    url(r'accounts/delivery/$', login_required(ProfileDeliveryView.as_view()), name='profile_delivery', ),
    url(r'accounts/payment/$', login_required(ProfilePaymentView.as_view()), name='profile_payment', ),
]