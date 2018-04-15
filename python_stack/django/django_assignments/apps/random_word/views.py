# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string
# Create your views here.
def index(request):
    return render(request,'random.html')
def geword(request):
    if 'attemtime' not in request.session:
        request.session['attemtime']=1
    else:
        request.session['attemtime']+=1
    resultval = get_random_string(length=14)
    context = {
        'result':resultval
    }
    return render(request,'random.html',context)