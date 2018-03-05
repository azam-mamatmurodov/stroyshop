from rest_framework import serializers


class CartSerializer(serializers.Serializer):
    variation_id = serializers.IntegerField(required=True)
    quantity = serializers.IntegerField(required=True)
    client_id = serializers.IntegerField(required=True)