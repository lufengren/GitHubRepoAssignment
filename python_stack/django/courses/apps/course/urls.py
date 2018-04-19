from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^add$', views.add),
    url(r'^courses/destroy/(\d+)$', views.destroy),
    url(r'^courses/delete/(\d+)$', views.delete),
]