# Generated by Django 3.1.7 on 2021-03-21 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=1024, verbose_name="Client's Name")),
                ('point_of_contact', models.CharField(max_length=1024, verbose_name="Point Of Contact (PoC) At Client's Site")),
                ('address', models.TextField(verbose_name="Client's Address")),
                ('image', models.ImageField(upload_to='clients', verbose_name="Client's Picture")),
                ('poc_image', models.ImageField(upload_to='clients/poc', verbose_name="PoC's Picture")),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=1024, verbose_name="Product's Name")),
            ],
        ),
    ]
