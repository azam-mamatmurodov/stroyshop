from django import template
from django.template.loader import render_to_string

register = template.Library()


def get_brands(category):
    brands = category.brands_set.all()
    if brands:
        return render_to_string('parts/brands.html', {'brands': brands})
    return ""


register.filter('get_brands', get_brands)
