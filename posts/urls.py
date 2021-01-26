from django.urls import path
from . import views

app_name = "posts"

urlpatterns = [
    path("", views.post_list, name="post_list"),
    path("create/", views.post_create, name="post_create"),
    path("comment/create", views.comment_create, name="comment_create"),
    path("comment/delete", views.comment_delete, name="comment_delete"),
    path("post/like", views.post_like, name="post_like"),
]
