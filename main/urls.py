from django.conf.urls import url

from main.views import HomeView, StaticView, Filter

urlpatterns = [
    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^filter/$', Filter.as_view(), name='filter'),
    url(r'^page/(?P<slug>[-\w]+)/$', StaticView.as_view(), name='static'),
]