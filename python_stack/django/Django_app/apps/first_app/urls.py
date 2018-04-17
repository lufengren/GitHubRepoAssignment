from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^blog$', views.index),     # This line has changed!
    url(r'^blog/new$', views.new),
    url(r'^blog/create$', views.create),
    url(r'^blog/(\d+)$', views.show),
    url(r'^blog/(\d+)/edit$', views.edit),
    url(r'^blog/(\d+)/delete$', views.destrory)
  ]