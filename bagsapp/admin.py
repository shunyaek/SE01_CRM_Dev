from django.contrib import admin

from bagsapp.models import Client, Brand, Product, ProductQuantity

admin.site.register(Client)
admin.site.register(Brand)
admin.site.register(Product)
admin.site.register(ProductQuantity)
