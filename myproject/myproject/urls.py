"""myproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import include
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from myapp import views
    
    ##!Noe greier!##
# from myapp.views import AnimaltypeView
# from animaltypes import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('animals/all', views.allAnimalList.as_view()),
    path('animals/:id', views.idAnimalList.as_view()),
    path('animal/', views.AnimalList.as_view()),
    path('animal-type/all', views.AnimalTypeList.as_view())
    
        ##!Noe greier!##
    #url(r'^api/fjos/$', AnimaltypeView.as_view()),
    #path('animaltypes/', views.allAnimalypeView.as_view())
    #url(r'^/$', IndexView.as_view())
    #url(r'^api-auth/', include('rest_framework.urls')),   
]

urlpatterns = format_suffix_patterns(urlpatterns)
