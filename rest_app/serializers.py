from django.contrib.humanize.templatetags import humanize
from rest_framework import serializers

from orders.models import Cart
from products.models import Product, Variation


class CartSerializer(serializers.ModelSerializer):
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = '__all__'

    @staticmethod
    def get_total_price(obj):
        return format(int(obj.total_price), ",").replace(',', ' ')


class ProductSerializer(serializers.ModelSerializer):
    variations = serializers.StringRelatedField(many=True,)

    class Meta:
        model = Product
        fields = '__all__'


class VariationSerializer(serializers.ModelSerializer):
    color_name = serializers.SerializerMethodField()
    color_code = serializers.SerializerMethodField()

    class Meta:
        model = Variation
        fields = '__all__'

    @staticmethod
    def get_color_name(obj):
        return obj.color.name if obj.color else None

    @staticmethod
    def get_color_code(obj):
        return obj.color.color if obj.color else None
