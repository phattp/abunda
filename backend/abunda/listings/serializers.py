from rest_framework import serializers, fields
from django.contrib.auth.models import User
from django.utils.formats import number_format
from django.utils.timesince import timesince
from .models import Listing


class ListingSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    price = serializers.SerializerMethodField('price_localize')
    psm = serializers.SerializerMethodField('psm_localize')
    created_at = serializers.SerializerMethodField('created_at_ago')
    updated_at = serializers.SerializerMethodField('updated_at_ago')
    listing_type = serializers.SerializerMethodField('listing_type_name')
    sales_type = serializers.SerializerMethodField('sales_type_name')
    furnishing = serializers.SerializerMethodField('furnishing_name')
    tenure = serializers.SerializerMethodField('tenure_name')

    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }

    def price_localize(self, obj):
        return number_format(obj.price)

    def psm_localize(self, obj):
        return number_format(obj.psm)

    def created_at_ago(self, obj):
        return timesince(obj.created_at)

    def updated_at_ago(self, obj):
        return timesince(obj.updated_at)

    def listing_type_name(self, obj):
        return obj.get_listing_type_display()

    def sales_type_name(self, obj):
        return obj.get_sales_type_display()

    def furnishing_name(self, obj):
        return obj.get_furnishing_display()

    def tenure_name(self, obj):
        return obj.get_tenure_display()
