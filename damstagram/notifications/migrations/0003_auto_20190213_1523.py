# Generated by Django 2.0.10 on 2019-02-13 06:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0002_auto_20190213_1519'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='notification_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='images.Image'),
        ),
    ]
