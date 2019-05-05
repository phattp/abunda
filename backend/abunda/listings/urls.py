from django.urls import path, include
from rest_framework import routers
from .views import Listingview

router = routers.DefaultRouter()
router.register('api/listings', Listingview, 'listings')

urlpatterns = [
    path('', include(router.urls))
]
