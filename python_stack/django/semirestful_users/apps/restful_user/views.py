# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from time import strftime
from models import *
# Create your views here.
def index(request):
    return render(request,'index.html',{'users':User.objects.all()})
def show(request,passid):
    return render(request,'show.html',{'user':User.objects.get(id=passid)})
def new(request):
    return render(request,'new.html')
def create(request):
    firstname=request.POST['firstname']
    lastname=request.POST['lastname']
    email=request.POST['email']
    User.objects.create(first_name=firstname,last_name=lastname,email=email)
    users=User.objects.filter(first_name=firstname)
    passid=str(users[0].id)
    return redirect("/users/"+passid)
def edit(request,passid):
    return render(request,'edit.html',{'user':User.objects.get(id=passid)})

def update(request,passid):
    firstname=request.POST['firstname']
    lastname=request.POST['lastname']
    email=request.POST['email']
    user=User.objects.get(id=passid)
    user.first_name=firstname
    user.last_name=lastname
    user.email=email
    user.save()
    return redirect("/users/"+passid)

def destroy(request,passid):
    user=User.objects.get(id=passid)
    user.delete()
    return redirect("/users")

