# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-13 07:12
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0025_auto_20180408_1559'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paymentcards',
            name='expiration_date',
            field=models.DateField(default=datetime.datetime(2018, 4, 23, 7, 12, 33, 984735, tzinfo=utc)),
        ),
    ]