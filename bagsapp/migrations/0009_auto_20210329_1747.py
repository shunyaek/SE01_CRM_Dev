# Generated by Django 3.1.7 on 2021-03-29 17:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bagsapp', '0008_auto_20210329_1331'),
    ]

    operations = [
        migrations.RenameField(
            model_name='brand',
            old_name='created_date_time',
            new_name='added_date_time',
        ),
        migrations.RenameField(
            model_name='client',
            old_name='created_date_time',
            new_name='added_date_time',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='created_date_time',
            new_name='added_date_time',
        ),
        migrations.RenameField(
            model_name='productquantity',
            old_name='created_date_time',
            new_name='added_date_time',
        ),
    ]
