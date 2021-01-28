from django.shortcuts import render, get_object_or_404, reverse
from django.views.generic.list import ListView
from django.views.generic.edit import CreateView
from django.http import JsonResponse
from .models import Post, Comment
import json


def post_create(request):
    pass


# def post_list(request):

#     ctx = {
#         "posts": Post.objects.all(),
#     }
#     return render(request, "posts.post_list.html")


class PostList(ListView):
    model = Post


post_list = PostList.as_view()


class PostCreate(CreateView):
    model = Post
    fields = ["title", "content", "image"]

    def get_success_url(self):
        return reverse("posts:post_list")


post_create = PostCreate.as_view()


def comment_create(request):
    # request에는 댓글을 추가한 post와 comment의 content가 담겨 있다.
    data = json.loads(request.body)
    print(data)
    post = get_object_or_404(Post, pk=data["postPk"])
    content = data["content"]

    comment = Comment(post=post, content=content)
    comment.save()

    comments = post.comments.all()
    comments = list(comments.values())
    # comment_list = []
    # for comment in comments:
    #     comment_node = {"pk": f"{comment.pk}", "content": f"{comment.content}"}
    #     comment_list.append(comment_node)

    # comment_list = json.dumps(comment_list)
    # print(type(comment_list))
    return JsonResponse(comments, safe=False)


def comment_delete(request):
    data = json.loads(request.body)
    commentPk = data["commentPk"]
    post = get_object_or_404(Comment, pk=commentPk).post
    get_object_or_404(Comment, pk=commentPk).delete()
    comments = post.comments.all()
    comments = list(comments.values())
    print(comments)

    return JsonResponse(comments, safe=False)


def post_like(request):
    data = json.loads(request.body)
    postPk = data["postPk"]
    post = get_object_or_404(Post, pk=postPk)
    post.like = not post.like
    post.save()
    return JsonResponse(post.like, safe=False)
