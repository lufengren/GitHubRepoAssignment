# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
import random
import datetime
def index(request):
    if 'totalgold' not in request.session:
        request.session['totalgold']=0
    if 'activity' not in request.session:
        request.session['activity'] = []
    return render(request,'index.html')

# Create your views here.
def process_money(request):
    currenttime = datetime.datetime.now()
    if request.POST['building']=='farm':
        randnum = random.randrange(10,21)
        request.session['totalgold'] += randnum
        request.session['activity'].append(["greencolor","Earned {} golds from the farm! {}".format(randnum,currenttime)])
    elif request.POST['building']=='cave':
        randnum = random.randrange(5,11)
        request.session['totalgold'] += randnum
        request.session['activity'].append(["greencolor","Earned {} golds from the cave! {}".format(randnum,currenttime)])
    elif request.POST['building']=='house':
        randnum = random.randrange(2,6)
        request.session['totalgold'] += randnum
        request.session['activity'].append(["greencolor","Earned {} golds from the house! {}".format(randnum,currenttime)])
    elif request.POST['building']=='casino':
        addortake = random.randrange(0,2)
        if addortake==0:
            randnum = random.randrange(0,51)
            request.session['totalgold'] += randnum
            request.session['activity'].append(["greencolor","Entered a casino and earned {} golds {}".format(randnum,currenttime)])
        else:
            randnum = random.randrange(0,51)
            request.session['totalgold'] -= randnum
            request.session['activity'].append(["redcolor","Entered a casino and lost {} golds...Ouch.... {}".format(randnum,currenttime)])
    return redirect("/")    