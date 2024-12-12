from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return self.first_name
