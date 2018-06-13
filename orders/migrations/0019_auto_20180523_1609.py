# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-05-23 11:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0018_auto_20180430_1424'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='state',
            field=models.IntegerField(blank=True, choices=[(0, 'Доступно'), (1, 'Ожидание оплаты'), (2, 'Оплата завершена'), (3, 'Отменен'), (4, 'Доставлен'), (-1, 'In process')], default=0),
        ),
    ]
