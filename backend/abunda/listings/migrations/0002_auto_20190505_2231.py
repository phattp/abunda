# Generated by Django 2.2.1 on 2019-05-05 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='built_year',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AddField(
            model_name='listing',
            name='car_park',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='listing',
            name='cctv',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='listing',
            name='fitness',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='listing',
            name='multi_purpose_hall',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='listing',
            name='pavillion',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='listing',
            name='playground',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='listing',
            name='security',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='listing',
            name='swimming_pool',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='listing',
            name='bathrooms',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='listing',
            name='bedrooms',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='listing',
            name='floor',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='listing',
            name='furnishing',
            field=models.CharField(choices=[('FF', 'Fully Furnished'), ('PF', 'Partially Furnished'), ('UF', 'Unfurnished')], max_length=2),
        ),
        migrations.AlterField(
            model_name='listing',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=20),
        ),
        migrations.AlterField(
            model_name='listing',
            name='psm',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True),
        ),
        migrations.AlterField(
            model_name='listing',
            name='sqmt',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='listing',
            name='util_space',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.AlterField(
            model_name='listing',
            name='zipcode',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]
