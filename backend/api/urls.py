from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
ProductViewSet,
OrderViewSet,
OrderItemViewSet,
register_user,
profile,
)

router = DefaultRouter()

router.register("products", ProductViewSet)
router.register("orders", OrderViewSet)
router.register("order-items", OrderItemViewSet)

urlpatterns = [
path(
"register/",
register_user,
name="register",
),


path(
    "",
    include(router.urls),
),

path(
    "profile/<int:user_id>/",
    profile,
    name="profile",
),


]
