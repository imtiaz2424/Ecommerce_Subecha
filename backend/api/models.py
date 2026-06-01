from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )
    image = models.URLField()
    description = models.TextField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
    auto_now_add=True,
    null=True,
    blank=True
    )

    def __str__(self):
        return self.name