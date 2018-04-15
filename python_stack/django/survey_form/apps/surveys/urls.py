from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index), 
    url(r'^surveys/process$', views.surveysprocess), 
    url(r'^result$', views.result),
    url(r'^surveys/reset$', views.surveysreset), 
]