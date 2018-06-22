# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-05-26 03:33
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import filer.fields.image
import parler.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.FILER_IMAGE_MODEL),
        ('orders', '0020_auto_20180525_0053'),
    ]

    operations = [
        migrations.CreateModel(
            name='PaymentMethod',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=60)),
                ('method', models.CharField(choices=[('uzcard', 'Uzcard'), ('payme', 'Payme'), ('cash_on_delivery', 'Оплата при доставке')], default='uzcard', max_length=40)),
                ('logo', filer.fields.image.FilerImageField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.FILER_IMAGE_MODEL)),
            ],
            options={
                'abstract': False,
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='PaymentMethodTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('description', models.TextField(blank=True, null=True)),
                ('master', models.ForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='orders.PaymentMethod')),
            ],
            options={
                'verbose_name': 'payment method Translation',
                'db_table': 'orders_paymentmethod_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
            },
        ),
        migrations.RemoveField(
            model_name='order',
            name='payment_method',
        ),
        migrations.AddField(
            model_name='order',
            name='payment',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='orders.PaymentMethod'),
        ),
        migrations.AlterUniqueTogether(
            name='paymentmethodtranslation',
            unique_together=set([('language_code', 'master')]),
        ),
    ]