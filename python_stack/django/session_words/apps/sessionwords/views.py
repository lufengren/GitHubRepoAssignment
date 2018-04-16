# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
# Create your views here.
def index(request):
    if 'sessionarray' not in request.session:
        request.session['sessionarray']=[]
    return render(request,'index.html')
def formprocess(request):
    session = []
    #request.session['sessionarray']=[]
    request.session['word'] = request.POST['word']
    session.append(request.session['word'])
    request.session['color'] = request.POST['color']
    session.append(request.session['color'])
    request.session['fonts'] = request.POST.get("fonts", False)
    session.append(request.session['fonts'])
    request.session['currenttime'] = strftime("%H:%M %p %b %d, %Y ", gmtime())
    session.append(request.session['currenttime'])
    request.session['sessionarray'].append(session)
    
    #print session
    #print request.session['sessionarray']
    return redirect("/session_words")
def clear(request):
    del request.session['sessionarray']
    return redirect("/session_words")
