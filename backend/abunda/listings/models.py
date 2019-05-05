from django.db import models
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify


LISTING_TYPE_CHOICES = (
    ('Residential', (
        ('CD', 'Condominium'),
        ('DH', 'Detached Home'),
        ('AP', 'Townhome'),
    )
    ),
    ('Commercial', (
        ('CB', 'Commercial Building'),
        ('OB', 'Office Building'),
        ('HT', 'Hotel'),
    )
    ),
    ('LN', 'Land'),
    ('ID', 'Industrial'),
)

TENURE_CHOICES = (
    ('FH', 'Freehold'),
    ('LH', 'Leasehold'),
)

SALES_TYPE_CHOICES = (
    ('BY', 'Buy'),
    ('RT', 'Rent'),
)

FURNISHING_CHOICES = (
    ('FF', 'Fully Furnished'),
    ('PF', 'Partially Furnished'),
    ('UF', 'Unfurnished'),
)


class Listing(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    sales_type = models.CharField(max_length=2, choices=SALES_TYPE_CHOICES)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=20, blank=True)
    price = models.DecimalField(max_digits=20, decimal_places=2)
    psm = models.DecimalField(
        max_digits=20, decimal_places=2, blank=True, null=True)
    bedrooms = models.IntegerField(default=1)
    bathrooms = models.IntegerField(default=1)
    listing_type = models.CharField(max_length=2, choices=LISTING_TYPE_CHOICES)
    garage = models.IntegerField(default=0, blank=True)
    util_space = models.IntegerField(default=0, blank=True)
    sqmt = models.IntegerField(default=0)
    furnishing = models.CharField(max_length=2, choices=FURNISHING_CHOICES)
    floor = models.IntegerField(default=0, blank=True)
    tenure = models.CharField(max_length=2, choices=TENURE_CHOICES)
    developer = models.CharField(max_length=200, blank=True)
    built_year = models.IntegerField(default=0, blank=True)
    description = models.TextField(blank=True)
    car_park = models.BooleanField(default=False)
    fitness = models.BooleanField(default=False)
    security = models.BooleanField(default=False)
    cctv = models.BooleanField(default=False)
    playground = models.BooleanField(default=False)
    swimming_pool = models.BooleanField(default=False)
    pavillion = models.BooleanField(default=False)
    multi_purpose_hall = models.BooleanField(default=False)
    is_published = models.BooleanField(default=True)
    photo_main = models.ImageField(upload_to='photos/', blank=True)
    photo_1 = models.ImageField(upload_to='photos/', blank=True)
    photo_2 = models.ImageField(upload_to='photos/', blank=True)
    photo_3 = models.ImageField(upload_to='photos/', blank=True)
    photo_4 = models.ImageField(upload_to='photos/', blank=True)
    photo_5 = models.ImageField(upload_to='photos/', blank=True)
    photo_6 = models.ImageField(upload_to='photos/', blank=True)
    photo_7 = models.ImageField(upload_to='photos/', blank=True)
    photo_8 = models.ImageField(upload_to='photos/', blank=True)
    photo_9 = models.ImageField(upload_to='photos/', blank=True)
    photo_10 = models.ImageField(upload_to='photos/', blank=True)
    photo_11 = models.ImageField(upload_to='photos/', blank=True)
    photo_12 = models.ImageField(upload_to='photos/', blank=True)
    photo_13 = models.ImageField(upload_to='photos/', blank=True)
    photo_14 = models.ImageField(upload_to='photos/', blank=True)
    photo_15 = models.ImageField(upload_to='photos/', blank=True)
    photo_16 = models.ImageField(upload_to='photos/', blank=True)
    photo_17 = models.ImageField(upload_to='photos/', blank=True)
    photo_18 = models.ImageField(upload_to='photos/', blank=True)
    photo_19 = models.ImageField(upload_to='photos/', blank=True)
    photo_20 = models.ImageField(upload_to='photos/', blank=True)
    photo_21 = models.ImageField(upload_to='photos/', blank=True)
    photo_22 = models.ImageField(upload_to='photos/', blank=True)
    photo_23 = models.ImageField(upload_to='photos/', blank=True)
    photo_24 = models.ImageField(upload_to='photos/', blank=True)
    photo_25 = models.ImageField(upload_to='photos/', blank=True)
    photo_26 = models.ImageField(upload_to='photos/', blank=True)
    photo_27 = models.ImageField(upload_to='photos/', blank=True)
    photo_28 = models.ImageField(upload_to='photos/', blank=True)
    photo_29 = models.ImageField(upload_to='photos/', blank=True)
    photo_30 = models.ImageField(upload_to='photos/', blank=True)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, auto_now_add=False)
    owner = models.ForeignKey(
        User, related_name='listings', on_delete=models.CASCADE, null=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Listing, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
