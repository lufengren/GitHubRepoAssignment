# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render,HttpResponse, redirect
def index(request):
    return render(request,'index.html')
def process(request):
    if 'totalitem' not in request.session:
        request.session['totalitem']=0
    if 'totalprice' not in request.session:
        request.session['totalprice']=0
    request.session['currentprice']=0
    print request.session['currentprice']
    if int(request.POST['product_id'])==100:
        request.session['currentprice']=int(request.POST['quantity'])*19.99
        request.session['totalitem']+=int(request.POST['quantity'])
        request.session['totalprice']+=request.session['currentprice']
        return redirect("/amadon/checkout")
    if int(request.POST['product_id'])==101:
        request.session['currentprice']=int(request.POST['quantity'])*29.99
        request.session['totalitem']+=int(request.POST['quantity'])
        request.session['totalprice']+=request.session['currentprice']
        return redirect("/amadon/checkout")
    if int(request.POST['product_id'])==102:
        request.session['currentprice']=int(request.POST['quantity'])*4.99
        request.session['totalitem']+=int(request.POST['quantity'])
        request.session['totalprice']+=request.session['currentprice']
        return redirect("/amadon/checkout")
    if int(request.POST['product_id'])==103:
        request.session['currentprice']=int(request.POST['quantity'])*49.99
        request.session['totalitem']+=int(request.POST['quantity'])
        request.session['totalprice']+=request.session['currentprice']
        return redirect("/amadon/checkout")
def checkout(request):
    return render(request,'checkout.html')
# Create your views here.
