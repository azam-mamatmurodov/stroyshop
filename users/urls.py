from django.conf.urls import url
from users.views import LoginView, RegisterView
from django.contrib.auth.views import LogoutView

urlpatterns = [
    url(r'^accounts/login/$', LoginView.as_view(), name='login', ),
    url(r'^accounts/logout/$', LogoutView.as_view(next_page='/'), name='logout', ),
    url(r'^accounts/register/$', RegisterView.as_view(), name='register', ),
]