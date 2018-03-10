from django.views.generic import TemplateView, DetailView

from main.modules import get_default
from main.models import Static
from products.models import Product, Review, Brands


class HomeView(TemplateView):
    template_name = 'pages/main.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update(get_default(request=self.request))
        context['top_products'] = Product.objects.filter(is_top=True)
        context['reviews'] = Review.objects.filter(is_approved=True)
        context['brands'] = Brands.objects.all()
        return context


class Filter(TemplateView):
    template_name = 'pages/filter.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update(get_default(request=self.request))
        return context


class StaticView(DetailView):
    model = Static
    template_name = 'pages/static.html'

    def get_object(self, queryset=None):
        return self.model.objects.all().translated(slug=self.kwargs.get('slug')).first()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update(get_default(request=self.request))
        return context
