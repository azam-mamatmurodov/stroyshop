# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-03-09 07:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0040_auto_20180307_2057'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='is_top',
            field=models.BooleanField(default=False),
        ),
    ]