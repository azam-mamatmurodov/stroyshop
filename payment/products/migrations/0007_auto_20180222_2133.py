# -*- coding: utf-8 -*-
# Generated by Django 1.11.9 on 2018-02-22 21:33
from __future__ import unicode_literals

import ckeditor_uploader.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import mptt.fields


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_product_variation'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='images',
            field=models.ImageField(default='default.png', upload_to='products/%Y/%m/%d/', verbose_name='Product Images'),
        ),
        migrations.AlterField(
            model_name='brands',
            name='logo',
            field=models.ImageField(upload_to='brands/', verbose_name='Logo'),
        ),
        migrations.AlterField(
            model_name='brands',
            name='name',
            field=models.CharField(max_length=60, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='categorytranslation',
            name='name',
            field=models.CharField(max_length=60, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='categorytranslation',
            name='slug',
            field=models.SlugField(verbose_name='Slug'),
        ),
        migrations.AlterField(
            model_name='product',
            name='brand',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Brands', verbose_name='Brand'),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=mptt.fields.TreeForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Category', verbose_name='Category'),
        ),
        migrations.AlterField(
            model_name='product',
            name='characters',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Characters'),
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='product',
            name='name',
            field=models.CharField(max_length=120, verbose_name='Product name'),
        ),
        migrations.AlterField(
            model_name='product',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Product Owner'),
        ),
        migrations.AlterField(
            model_name='variation',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Price'),
        ),
        migrations.AlterField(
            model_name='variation',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Product', verbose_name='Product'),
        ),
        migrations.AlterField(
            model_name='variation',
            name='quantity',
            field=models.IntegerField(verbose_name='Quantity'),
        ),
        migrations.AlterField(
            model_name='variation',
            name='volume',
            field=models.CharField(choices=[('kg', 'KG'), ('l', 'Litr')], max_length=12, verbose_name='Volume type'),
        ),
    ]
