# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-06-01 15:47
from __future__ import unicode_literals

from decimal import Decimal
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0026_auto_20180601_1526'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='porter_work_price',
            field=models.FloatField(default=Decimal('0')),
        ),
    ]