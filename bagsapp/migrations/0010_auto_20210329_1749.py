# Generated by Django 3.1.7 on 2021-03-29 17:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bagsapp', '0009_auto_20210329_1747'),
    ]

    operations = [
        migrations.RenameField(
            model_name='brand',
            old_name='added_date_time',
            new_name='created_date_time',
        ),
        migrations.RenameField(
            model_name='client',
            old_name='added_date_time',
            new_name='created_date_time',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='added_date_time',
            new_name='created_date_time',
        ),
        migrations.RenameField(
            model_name='productquantity',
            old_name='added_date_time',
            new_name='created_date_time',
        ),
    ]
