# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-04-17 23:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dojoninja', '0002_auto_20180417_2237'),
    ]

    operations = [
        migrations.AddField(
            model_name='dojo',
            name='desc',
            field=models.TextField(default=''),
        ),
    ]
