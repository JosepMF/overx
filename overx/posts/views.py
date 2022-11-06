from django.shortcuts import render, HttpResponse, redirect
from django.shortcuts import get_object_or_404
from .models import Post


# Create your views here.
def main_page(request):
    posts = Post.objects.order_by('-id')
    return render(request, 'home.html', {'posts': posts})


def create_post(request):
    post = Post()

    if request.method == 'POST':

        if not request.POST['title'] and not request.POST['description']:
            return HttpResponse("Is needed some field")

        post.title = request.POST['title']
        post.description = request.POST['description']

        post.save()

    return render(request, 'create-post-template.html')


def delete_post(request, post_id):
    post = get_object_or_404(Post, pk=post_id)

    post.delete()

    return redirect('/')
