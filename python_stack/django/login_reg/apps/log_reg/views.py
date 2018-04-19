# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render,HttpResponse,redirect
from django.contrib import messages
#from django.contrib.messages import error 
import bcrypt 
from models import *
from .models import User

# Create your views here.
def index(request):
    return render(request,'index.html')
def register(request):
    errors = User.objects.basic_validator(request.POST)
    if len(errors):
        for tag,message in errors.iteritems():
            messages.error(request,message,tag)
        return redirect("/",errors)
    
    else:
        firstname=request.POST['firstname']
        lastname=request.POST['lastname']
        email=request.POST['email']
        password=request.POST['password']
        encryptpass=bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        User.objects.create(first_name=firstname,last_name=lastname,email=email,password=encryptpass)
        #user=User.objects.filter(first_name=firstname)
        context={
            'passname':firstname,
            'regorlog':"registered"
        }
        return render(request,'success.html',context)
def login(request):
    errors = User.objects.login_validator(request.POST)
    if len(errors):
        for tag,message in errors.iteritems():
            messages.error(request,message,tag)
        return redirect("/",errors)
    else:
        email=request.POST['logemail']
        # password=request.POST['logpassword']
        # encryptpass=bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        user=User.objects.filter(email=email)
        context={
            'passname':user[0].first_name,
            'regorlog':"loggedin"
        }
        return render(request,'success.html',context)
