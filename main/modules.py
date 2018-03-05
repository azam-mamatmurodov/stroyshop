from django.template.loader import render_to_string

from main.models import Menu, Banner
from products.models import Category


def get_header(request):
    context = dict()
    context['menu_items'] = Menu.objects.all()
    context['category'] = Category.objects.all()
    context['request'] = request
    return render_to_string('parts/header.html', context=context)


def get_banner(request):
    context = dict()
    context['banner_items'] = Banner.objects.all()
    context['request'] = request
    return render_to_string('parts/banner.html', context=context)


def get_footer(request):
    context = dict()
    context['request'] = request
    return render_to_string('parts/footer.html', context=context)


def get_default(request):
    context = dict()
    context['header'] = get_header(request)
    context['banner'] = get_banner(request)
    context['footer'] = get_footer(request)
    return context
