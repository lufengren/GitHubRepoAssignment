# -*- coding: utf-8 -*-
from django.shortcuts import render, HttpResponse, redirect
#from __future__ import unicode_literals
def index(request):
    response = "placeholder to later display all the list of blogs"
    return HttpResponse(response)

def new(request):
    response = "placeholder to display a new form to create a new blog"
    return HttpResponse(response)

def create(request):
    return redirect("/")
def show(request,param1):
    response = "placeholder to display blog "+param1
    return HttpResponse(response)
def edit(request,param1):
    response = "placeholder to edit blog "+param1
    return HttpResponse(response)
def destory(request,param1):
    return redirect("/")
# Create your views here.
    