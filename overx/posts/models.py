from django.db import models
from django.utils.timezone import now


# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=2500)
    create_at = models.DateField(default=now)
    username = models.CharField(max_length=255, default="")
    user_id = models.IntegerField(default=0)
