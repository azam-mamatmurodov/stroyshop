from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.admin import AdminSite

from solid_i18n.urls import solid_i18n_patterns

AdminSite.site_title = AdminSite.site_header = 'Stroyshop.uz'
AdminSite.site_header = 'My administration'

from rest_framework_swagger.views import get_swagger_view
from rest_app.urls import urlpatterns as api_urlpatterns
from filebrowser.sites import site as filebrowser_site

api_view = get_swagger_view(title='Api v1')


urlpatterns = [
    url(r'^i18n/', include('django.conf.urls.i18n')),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),

    url(r'admin/', admin.site.urls),

    url(r'^admin/filebrowser/', include(filebrowser_site.urls)),
    url(r'grappelli/', include('grappelli.urls')),
]

urlpatterns += solid_i18n_patterns(
    url(r'', include('users.urls', namespace='users')),
    url(r'', include('products.urls', namespace='products')),
    url(r'', include('orders.urls', namespace='orders')),
    url(r'', include('main.urls', namespace='main')),
    url(r'api/v1/', include(api_urlpatterns, namespace='api'),),
    url(r'api/v1/docs/', api_view)
)


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
