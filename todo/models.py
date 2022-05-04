from django.db import models

# Create your models here.

class Todo(models.Model):
    priority_choices = [
        ('VI','veryImportant'),
        ('I','Important')
    ]
    title = models.CharField(max_length=60, blank=False, default='')
    description = models.TextField(blank=False, default='')
    status = models.BooleanField(default=False)
    # priority=models.CharField(max_length=2,choices=priority_choices,blank=True)
    # date = models.DateTimeField(blank=True)
    # developer = models.CharField(max_length=100, blank=False, default='')
