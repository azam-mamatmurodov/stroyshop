from django.contrib import admin
from parler.admin import TranslatableAdmin
from main.models import Menu, Banner, Static, UserMenu, CustomerMenu, StaticFooterPage


class MenuAdmin(TranslatableAdmin):
    def get_prepopulated_fields(self, request, obj=None):
        return {'slug': ('name',), }


class BannerAdmin(TranslatableAdmin):
    def get_prepopulated_fields(self, request, obj=None):
        return {'slug': ('name',), }


class StaticAdmin(TranslatableAdmin):
    def get_prepopulated_fields(self, request, obj=None):
        return {'slug': ('name',), }
    list_display = ['name', 'slug', ]


class StaticFooterPageAdmin(TranslatableAdmin):
    def get_prepopulated_fields(self, request, obj=None):
        return {'slug': ('name',), }
    list_display = ['name', 'slug', ]


admin.site.register(Menu, MenuAdmin)
admin.site.register(UserMenu, TranslatableAdmin)
admin.site.register(CustomerMenu, TranslatableAdmin)
admin.site.register(Banner, BannerAdmin)
admin.site.register(Static, StaticAdmin)
admin.site.register(StaticFooterPage, StaticFooterPageAdmin)

