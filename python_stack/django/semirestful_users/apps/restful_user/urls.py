from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^users$', views.index),
    url(r'^users/(\d+)$', views.show),
    url(r'^users/new$', views.new),
    url(r'^users/create$', views.create),
    url(r'^users/(\d+)/edit$', views.edit),
    url(r'^users/update/(\d+)$', views.update),
    url(r'^users/(\d+)/destroy$', views.destroy),
    
    #url(r'^users/new$', views.new),
    # url(r'^session_words$', views.index), 
    # url(r'^session_words/add_word$', views.formprocess), 
    # url(r'^session_words/clear$', views.clear), 
]