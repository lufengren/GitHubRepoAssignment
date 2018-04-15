# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
def index(request):
    return render(request,'index.html')
def surveysprocess(request):
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comment']
    return redirect("/result")
def result(request):
    return render(request,'result.html')
def surveysreset(request):
    del request.session['name']
    del request.session['location']
    del request.session['language']
    del request.session['comment']
    return redirect("/")
# Create your views here.
