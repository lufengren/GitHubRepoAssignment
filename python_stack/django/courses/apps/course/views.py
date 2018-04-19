# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.contrib.messages import error
from django.shortcuts import render,HttpResponse,redirect
from models import *
from .models import Course

# Create your views here.
def index(request):
    return render(request,'index.html',{'courses':Course.objects.all()})
def add(request):
    errors = Course.objects.basic_validator(request.POST)
    if len(errors):
        for tag,message in errors.iteritems():
            messages.error(request,message,tag)
        return redirect("/",errors)
    else:
        name=request.POST['name']
        desc=request.POST['desc']
        Course.objects.create(name="name",desc="desc")
        return render(request,'add.html')
def destroy(request,passid):
    return render(request,'destroy.html',{'course':Course.objects.get(id=passid)})
def delete(request,passid):
    course=Course.objects.get(id=passid)
    course.delete()
    return redirect("/")
