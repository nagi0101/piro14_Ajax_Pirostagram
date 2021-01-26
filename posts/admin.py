from django.contrib import admin
from . import models


@admin.register(models.Post)
class PostView(admin.ModelAdmin):
    list_display = [
        "title",
        "like",
    ]


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ["content", "post"]
