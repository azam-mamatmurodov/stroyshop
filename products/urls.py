from django.conf.urls import url
from products.views import ProductListView, ProductDetail, SearchView, ProductsImportView

urlpatterns = [
    url(r'^category/(?P<slug>[-\w]+)/$', ProductListView.as_view(), name='product_list'),
    url(r'^category/(?P<slug>[-\w]+)/product/(?P<pk>\d+)/$', ProductDetail.as_view(), name='product_detail'),
    url(r'^search/$', SearchView.as_view(), name='search', ),
    url(r'^products/import/$', ProductsImportView.as_view(), name='products_import', ),
]