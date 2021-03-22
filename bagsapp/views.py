from rest_framework import viewsets
from rest_framework import permissions, authentication
from bagsapp.serializers import (
    ClientSerializer,
    BrandSerializer,
    ProductSerializer,
    ProductQuantitySerializer,
)
from django.shortcuts import get_list_or_404
from rest_framework.response import Response
from bagsapp.models import Client, Brand, Product, ProductQuantity


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all().order_by("name")
    serializer_class = ClientSerializer


class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all().order_by("name")
    serializer_class = BrandSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by("name")
    serializer_class = ProductSerializer


class ProductQuantityViewSet(viewsets.ModelViewSet):
    queryset = ProductQuantity.objects.all().order_by("-quantity")
    serializer_class = ProductQuantitySerializer
