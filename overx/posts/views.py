from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from django.http import Http404
from .models import Post


# Create your views here.
def main_page(request):
    posts = Post.objects.order_by('-id')
    return render(request, 'home.html', {'posts': posts})

@login_required
def create_post(request):
    post = Post()

    if request.method == 'POST':

        if not request.POST['title'] and not request.POST['description']:
            return HttpResponse("Is needed some field")

        post.title = request.POST['title']
        post.description = request.POST['description']
        post.username = request.user.username
        post.user_id = request.user.id

        post.save()

    return redirect('/')

@login_required
def delete_post(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    
    user = request.user
    
    if post.user_id == user.id:
        post.delete()
        return redirect('/account')
    
    raise Http404("the post doesn't exist")

@login_required
def account(request):
    if request.method == 'GET':
        posts = Post.objects.filter(user_id=request.user.id).order_by('-id')
        
        return render(request, 'account.html', {'posts': posts})
