from rest_framework import viewsets
from .models import Listing
from .serializers import ListingSerializer


class Listingview(viewsets.ModelViewSet):
    queryset = Listing.objects.order_by('-created_at')
    serializer_class = ListingSerializer
    lookup_field = 'slug'

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
