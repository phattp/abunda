from django.contrib import admin
from .models import Listing


class ListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'is_published',
                    'price', 'created_at', 'owner')
    list_display_links = ('id', 'name')
    list_editable = ('is_published',)
    search_fields = ('name', 'city', 'price')
    list_per_page = 25


admin.site.register(Listing, ListingAdmin)
