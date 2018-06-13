# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-03-25 23:33
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0042_auto_20180324_0027'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='volume',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.VolumeType', verbose_name='Volume type'),
        ),
    ]
