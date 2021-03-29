from rest_framework import serializers
from bagsapp.models import Client, Brand, Product, ProductQuantity


class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = [
            "url",
            "identifier",
            "name",
            "point_of_contact",
            "address",
            "email",
            "created_date_time",
            "modified_date_time",
        ]


class BrandSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Brand
        fields = [
            "url",
            "identifier",
            "name",
            "client",
            "created_date_time",
            "modified_date_time",
        ]


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = [
            "url",
            "identifier",
            "name",
            "image",
            "cylinders",
            "bag_width",
            "bag_height",
            "bag_weight",
            "fabric_quality",
            "liner",
            "liner_weight",
            "gauge",
            "brands",
            "created_date_time",
            "modified_date_time",
        ]


class ProductQuantitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProductQuantity
        fields = [
            "url",
            "identifier",
            "quantity",
            "product",
            "brand",
            "created_date_time",
            "modified_date_time",
        ]
