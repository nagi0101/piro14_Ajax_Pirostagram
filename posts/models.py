from django.db import models
from config.utils import uuid_file_path

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    image = models.ImageField(upload_to=uuid_file_path)
    like = models.BooleanField(default=False)


class Comment(models.Model):
    content = models.TextField()
    post = models.ForeignKey("Post", on_delete=models.CASCADE, related_name="comments")
