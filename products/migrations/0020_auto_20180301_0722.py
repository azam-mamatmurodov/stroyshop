# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-03-01 07:22
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0019_remove_color_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='variation',
            name='color',
        ),
        migrations.DeleteModel(
            name='Color',
        ),
    ]
