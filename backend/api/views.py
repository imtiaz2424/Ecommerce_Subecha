from rest_framework.response import Response
from rest_framework.decorators import api_view

products = [
    {
        "id": 1,
        "name": "iPhone 15",
        "price": 1200,
        "category": "Mobile",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 2,
        "name": "Samsung S24",
        "price": 1100,
        "category": "Mobile",
        "image": "https://via.placeholder.com/300"
    },
]


@api_view(["GET"])
def product_list(request):
    return Response(products)


@api_view(["GET"])
def product_detail(request, pk):
    product = next(
        (p for p in products if p["id"] == int(pk)),
        None
    )

    if product:
        return Response(product)

    return Response(
        {"error": "Product not found"},
        status=404
    )