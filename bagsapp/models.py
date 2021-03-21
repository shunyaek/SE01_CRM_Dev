from django.db import models
import uuid
from datetime import datetime


class Client(models.Model):
    identifier = models.UUIDField(
        primary_key=True, verbose_name="Client's ID", default=uuid.uuid4, editable=False
    )
    name = models.CharField(
        verbose_name="Client's Name", max_length=1024, blank=False, null=False
    )
    point_of_contact = models.CharField(
        verbose_name="Point Of Contact (PoC) At Client's Site",
        max_length=1024,
        blank=False,
        null=True,
    )
    address = models.TextField(verbose_name="Client's Address", blank=False, null=True)
    email = models.EmailField(
        verbose_name="Client's E-Mail Address", blank=True, null=True
    )
    added_date_time = models.DateTimeField(auto_now_add=True)
    modified_date_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Brand(models.Model):
    identifier = models.UUIDField(
        primary_key=True, verbose_name="Brand's ID", default=uuid.uuid4, editable=False
    )
    name = models.CharField(
        verbose_name="Brand's Name", max_length=1024, blank=False, null=False
    )
    client = models.ForeignKey("Client", on_delete=models.CASCADE)
    added_date_time = models.DateTimeField(auto_now_add=True)
    modified_date_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    identifier = models.UUIDField(
        primary_key=True,
        verbose_name="Product's ID",
        default=uuid.uuid4,
        editable=False,
    )
    name = models.CharField(
        verbose_name="Product's Name", max_length=1024, blank=False, null=False
    )
    image = models.ImageField(
        verbose_name="Product's Picture", upload_to="products", null=True
    )
    cylinders = models.PositiveIntegerField(
        verbose_name="Number Of Cylinders", blank=False, null=True
    )
    bag_width = models.DecimalField(
        verbose_name="Width Of The Bag",
        max_digits=6,
        decimal_places=2,
        blank=False,
        null=True,
    )
    bag_height = models.DecimalField(
        verbose_name="Height Of The Bag",
        max_digits=6,
        decimal_places=2,
        blank=False,
        null=True,
    )
    bag_weight = models.PositiveIntegerField(
        verbose_name="Weight Of The Bag", blank=False, null=True
    )
    fabric_quality = models.PositiveIntegerField(
        verbose_name="Fabric Quality", blank=False, null=True
    )
    liner = models.BooleanField(
        verbose_name="Presence Of Liner", blank=False, null=True
    )
    liner_weight = models.PositiveIntegerField(
        verbose_name="Weight Of The Liner",
        blank=True,
        null=True,
    )
    gauge = models.PositiveIntegerField(verbose_name="Gauge", blank=False, null=True)
    brands = models.ManyToManyField(Brand)
    added_date_time = models.DateTimeField(auto_now_add=True)
    modified_date_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class ProductQuantity(models.Model):
    identifier = models.UUIDField(
        primary_key=True,
        verbose_name="ProductQuantity Entity's ID",
        default=uuid.uuid4,
        editable=False,
    )
    quantity = models.PositiveIntegerField(
        verbose_name="Quantity Of Product", blank=False, null=True, default=0
    )
    product = models.ForeignKey("Product", on_delete=models.CASCADE)
    brand = models.ForeignKey("Brand", on_delete=models.CASCADE)
    added_date_time = models.DateTimeField(auto_now_add=True)
    modified_date_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.product) + " <-> " + str(self.brand)
