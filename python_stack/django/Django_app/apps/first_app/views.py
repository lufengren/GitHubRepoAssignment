# -*- coding: utf-8 -*-
from django.shortcuts import render, HttpResponse, redirect
#from __future__ import unicode_literals
def index(request):
    response = "placeholder to later display all the list of blogs"
    #return render(request,"htmlfile/index.html")
    return HttpResponse(response)
def new(request):
    response = "placeholder to display a new form to create a new blog"
    return HttpResponse(response)
def create(request):
    return redirect("/blog")
def show(request,param):
    response = "'placeholder to display blog "+param
    return HttpResponse(response)
def edit(request,param):
    response = "placeholder to edit blog "+param
    return HttpResponse(response)
def destrory(request,param):
    return redirect("/blog")