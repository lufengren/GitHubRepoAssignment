from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^register$', views.register),     # This line has changed!
    url(r'^login$', views.login),
    url(r'^users$', views.show),
    url(r'^users/new$', views.new),
]