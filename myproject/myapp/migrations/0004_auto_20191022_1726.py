# Generated by Django 2.2.6 on 2019-10-22 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_auto_20191022_1710'),
    ]

    operations = [
        migrations.AlterField(
            model_name='animaltype',
            name='typen',
            field=models.CharField(choices=[('Male', 'M'), ('Female', 'F')], max_length=30),
        ),
    ]
