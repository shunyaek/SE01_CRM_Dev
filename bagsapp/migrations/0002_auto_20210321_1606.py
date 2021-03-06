# Generated by Django 3.1.7 on 2021-03-21 16:06

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('bagsapp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='id',
        ),
        migrations.RemoveField(
            model_name='client',
            name='image',
        ),
        migrations.RemoveField(
            model_name='client',
            name='poc_image',
        ),
        migrations.RemoveField(
            model_name='product',
            name='id',
        ),
        migrations.AddField(
            model_name='client',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True, verbose_name="Client's E-Mail Address"),
        ),
        migrations.AddField(
            model_name='client',
            name='identifier',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name="Client's ID"),
        ),
        migrations.AddField(
            model_name='product',
            name='bag_h',
            field=models.FloatField(null=True, verbose_name='Height Of The Bag'),
        ),
        migrations.AddField(
            model_name='product',
            name='bag_w',
            field=models.FloatField(null=True, verbose_name='Width Of The Bag'),
        ),
        migrations.AddField(
            model_name='product',
            name='bag_weight',
            field=models.FloatField(null=True, verbose_name='Weight Of The Bag'),
        ),
        migrations.AddField(
            model_name='product',
            name='cylinders',
            field=models.PositiveIntegerField(null=True, verbose_name='Number Of Cylinders'),
        ),
        migrations.AddField(
            model_name='product',
            name='fabric_quality',
            field=models.PositiveIntegerField(null=True, verbose_name='Fabric Quality'),
        ),
        migrations.AddField(
            model_name='product',
            name='gauge',
            field=models.PositiveIntegerField(null=True, verbose_name='Gauge'),
        ),
        migrations.AddField(
            model_name='product',
            name='identifier',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name="Product's ID"),
        ),
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(null=True, upload_to='products', verbose_name="Product's Picture"),
        ),
        migrations.AddField(
            model_name='product',
            name='liner',
            field=models.BooleanField(null=True, verbose_name='Presence Of Liner'),
        ),
        migrations.AddField(
            model_name='product',
            name='liner_weight',
            field=models.PositiveIntegerField(blank=True, null=True, verbose_name='Weight Of The Liner'),
        ),
        migrations.AlterField(
            model_name='client',
            name='address',
            field=models.TextField(null=True, verbose_name="Client's Address"),
        ),
        migrations.AlterField(
            model_name='client',
            name='point_of_contact',
            field=models.CharField(max_length=1024, null=True, verbose_name="Point Of Contact (PoC) At Client's Site"),
        ),
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('identifier', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name="Brand's ID")),
                ('name', models.CharField(max_length=1024, verbose_name="Client's Name")),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bagsapp.client')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='brands',
            field=models.ManyToManyField(to='bagsapp.Brand'),
        ),
    ]
