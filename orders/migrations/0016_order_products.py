# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-04-24 13:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0015_auto_20180424_1630'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='products',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]