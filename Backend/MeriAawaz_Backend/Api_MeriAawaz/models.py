from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('civilien', 'Civilien'),
        ('officer', 'Officer'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='civilien')

class Problem(models.Model):
    Statuses = [
        ("Reported", "Reported"),
        ("In Progress", "In Progress"),
        ("Postponed", "Postponed"),
        ("Completed", "Completed")
    ]

    id = models.IntegerField(primary_key=True,unique=True, editable=False)
    title = models.CharField(max_length=100)
    description = models.TextField()
    author=models.ForeignKey(CustomUser,on_delete=models.CASCADE,related_name="problems")
    status = models.CharField(max_length=15, choices=Statuses, default='Reported')
    created_at = models.DateTimeField(auto_now_add=True)
    path = models.CharField(max_length=255,default="base path")