from django.contrib import admin
from django.utils.translation import ugettext as _



from parler.admin import TranslatableAdmin
from mptt.admin import DraggableMPTTAdmin

from .models import *


class CategoryAdmin(TranslatableAdmin, DraggableMPTTAdmin):

    def get_prepopulated_fields(self, request, obj=None):
        return {'slug': ('name',),}

    mptt_level_indent = 20


class VariationAdmin(admin.TabularInline):
    model = Variation


class ProductImageAdmin(admin.TabularInline):
    model = ProductImage


class ColorAdmin(TranslatableAdmin):
    list_display = ['name', 'get_color', ]

    def get_color(self, obj):
        return '<div style="background:{}; width: 100px;">{}</div>'.format(obj.color, '&nbsp;')

    get_color.short_description = _('Color')
    get_color.allow_tags = True


class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageAdmin, VariationAdmin]
    list_display = ['name', 'price', ]


class ReviewAdmin(admin.ModelAdmin):

    list_display = ['reviewer', 'subject', 'is_approved', ]
    list_filter = ['is_approved', ]


admin.site.register(Category, CategoryAdmin)
admin.site.register(Brands)
admin.site.register(Product, ProductAdmin)
admin.site.register(Review, ReviewAdmin)
admin.site.register(Color, ColorAdmin)
admin.site.register(VolumeType, TranslatableAdmin)
admin.site.register(Variation)
