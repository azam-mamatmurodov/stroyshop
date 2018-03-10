from django.views.generic import ListView, DetailView, TemplateView
from django.views.generic.edit import ProcessFormView
from django.utils.translation import ugettext as _
from django.shortcuts import Http404
from django.db.models import Q, F
import django_filters

from main.modules import get_default
from products.models import Product, Category
from products.forms import LeaveReviewForm


class ProductFilter(django_filters.FilterSet):
    SORTING_RULES = {
        'price_asc': 'price',
        'price_desc': '-price',
        'a_z': 'name',
        'z_a': '-name',
        'new_first': '-pk',
        'old_first': 'pk'
    }

    order_by_field = 'order_by'
    min = django_filters.NumberFilter(field_name='price', lookup_expr='gte', )
    max = django_filters.NumberFilter(field_name='price', lookup_expr='lte', )
    is_recommended = django_filters.NumberFilter(field_name='is_recommended', label=_('Is recommended'))

    class Meta:
        model = Product
        fields = ['min', 'max', 'brand', 'is_recommended']

    order_by = django_filters.OrderingFilter(
        choices=(
            ('a_z', _('Title a-z')),
            ('z_a', _('Title z-a')),
            ('new_first', _('New products first')),
            ('old_first', _('Old products first')),
            ('price_asc', _('Price increasing')),
            ('price_desc', _('Price decreasing')),
        ),
    )

    @property
    def qs(self):
        _qs = super(ProductFilter, self).qs
        if self.request.GET.get('order_by', None):
            order_by = self.request.GET.get('order_by')
            ordering_rule = self.SORTING_RULES.get(order_by)
            _qs = _qs.order_by(ordering_rule)

        if self.request.GET.get('is_recommended', False):
            is_recommended = self.request.GET.get('is_recommended')
            _qs = _qs.filter(is_recommended=is_recommended)

        if self.request.GET.get('brand', None):
            brand = self.request.GET.get('brand')
            _qs = _qs.filter(brand=brand)

        if self.request.GET.get('min', None):
            min = self.request.GET.get('min')
            _qs = _qs.filter(price__gte=min)

        if self.request.GET.get('max', None):
            max = self.request.GET.get('max')
            print(max)
            _qs = _qs.filter(price__lte=max)

        return _qs


class ProductListView(ListView):
    template_name = 'pages/product_list.html'
    model = Product
    paginate_by = 60

    def get_queryset(self):
        queryset = self.model.objects.all()
        if self.kwargs.get('slug') != 'all':
            try:
                category = Category.objects.get(translations__slug=self.kwargs.get('slug'))
            except Category.DoesNotExist:
                raise Http404
            queryset = queryset.filter(category__in=[cat_item.id for cat_item in category.get_family()])
        queryset = ProductFilter(request=self.request, queryset=queryset).qs
        return queryset

    def get_context_data(self, **kwargs):
        context = super(ProductListView, self).get_context_data(**kwargs)
        context.update(get_default(request=self.request))
        dj_filter = ProductFilter(request=self.request, queryset=self.queryset)
        context['filter'] = dj_filter
        context['recommended_products'] = self.model.objects.filter(is_recommended=True)
        context['filter_query'] = self.request.build_absolute_uri().replace(self.request.build_absolute_uri('/').strip("/"), '')

        if self.kwargs.get('slug') != 'all':
            try:
                category = Category.objects.get(translations__slug=self.kwargs.get('slug'))
            except Category.DoesNotExist:
                raise Http404
            context['title'] = category.name
        else:
            context['title'] = _('All')
        return context


class ProductDetail(DetailView, ProcessFormView):
    template_name = 'pages/product_detail.html'
    model = Product
    context_object_name = 'product'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update(get_default(request=self.request))
        context['review_form'] = LeaveReviewForm()
        context['similar_products'] = self.model.objects.filter(category=self.object.category).exclude(pk=self.object.pk)
        return context

    def post(self, request, *args, **kwargs):
        self.object = self.model.objects.get(pk=kwargs.get('pk'))
        context = self.get_context_data(**kwargs)

        review = LeaveReviewForm(data=request.POST)
        if review.is_valid():
            review_instance = review.save(commit=False)
            review_instance.product = self.object
            review_instance.save()
        else:
            context['review_form'] = review
        return self.render_to_response(context=context)


class SearchView(ListView):
    template_name = 'pages/search.html'
    model = Product

    def get_queryset(self):
        qs = super().get_queryset()
        if self.request.GET.get('search', None):
            searched_text = self.request.GET.get('search', None)
            qs = qs.filter(Q(name__contains=searched_text) | Q(category__translations__name__contains=searched_text) | Q(description__contains=searched_text) | Q(characters__contains=searched_text))
        else:
            qs = list()
        return qs

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update(get_default(request=self.request))
        return context