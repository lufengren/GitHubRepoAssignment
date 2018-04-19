# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re
import bcrypt 
# Create your models here.


class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if len(postData['firstname']) < 2 or not postData['firstname'].isalpha():
            errors['firstname'] = 'firstname should be more than 2 letters'
        if len(postData['lastname']) < 2 or not postData['lastname'].isalpha():
            errors['lastname'] = 'lastname should be more than 2 letters'
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = 'Invalid Email Address!'
        if User.objects.filter(email=postData['email']):
            errors['email'] = 'Email already in use'
        if len(postData['password'])< 8:
            errors['password'] = 'password must be at least 8 charactors'
        if  postData['confirmpwd'] != postData['password']:
            errors['confirmpwd'] = 'confirmpassword is not equal to password'
        return errors
    def login_validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['logemail']):
            errors['email'] = 'Invalid Email Address!'
        if User.objects.filter(email=postData['logemail']):
            currentuser=User.objects.filter(email=postData['logemail'])[0]    
            checkresult=bcrypt.checkpw(postData['logpassword'].encode(), currentuser.password.encode())
            print postData['logpassword']
            if not checkresult:
                errors['password'] = "Email and password don't match!"
            #print currentuser.password
            #encryptpass=bcrypt.hashpw(postData['logpassword'].encode(), bcrypt.gensalt())
            #print encryptpass
            # if encryptpass!=currentuser.password:
            #     errors['password'] = "Email and password don't match!"
        return errors       



class User(models.Model):
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    email=models.CharField(max_length=255)
    password=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    objects = UserManager()
       
        