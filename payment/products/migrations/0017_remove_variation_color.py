# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-03-01 07:06
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0016_auto_20180301_0702'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='variation',
            name='color',
        ),
    ]
