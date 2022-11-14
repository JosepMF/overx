from django.shortcuts import redirect, render, HttpResponse
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required 

# Create your views here.
@login_required
def signout(request):
    logout(request)
    return redirect('home')


def signin(request):
    if request.method == 'GET':
        return render(request, 'signin.html')
    if request.method == 'POST':
        if not request.POST['username'] or not request.POST['password']:
            return render(request, 'signin.html', 
                            {'error_messages': 'the email address and password are required'}) 
        
        user = authenticate(
            request, username=request.POST['username'], password=request.POST['password'])

        
        if user is None:
            return render(request, 'signin.html', 
                          {'error_messages': 'the user was not found'})
        
        login(request, user)
        return redirect('/')
    else:
        return HttpResponse("method not supported")

def signup(request):
    if request.method == 'GET':
        return render(request, 'signup.html')
    if request.method == 'POST':
        if request.POST['password'] != request.POST['repassword']:           
            return render(request, 'signup.html', {
               'error_messages': 'the password\'s aren\'t similars'
            })
        if not request.POST['username'] or not request.POST['email']:
            return render(request, 'signup.html', {
               'error_messages': 'username and email are required'
            })
        try:
            
            user = User.objects.create_user(
                username=request.POST['username'],
                email=request.POST['email'],
                password=request.POST['password']
            )
            user.save()
            login(request, user)
            return redirect('/')      
        except IntegrityError:
            return render(request, 'signup.html', {
                'error_messages': 'the user has been created'
            })
    else:
        return HttpResponse("method not supported")
      
        