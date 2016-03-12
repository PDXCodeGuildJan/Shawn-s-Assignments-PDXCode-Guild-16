"""portfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Import the include() function: from django.conf.urls import url, include
    3. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
#THIS IS WHERE TO PICK BACK UP MARCH 9
from django.conf.urls import url, include
from django.contrib import admin
from javapic import urls as javapic_urls

#This is actually in the templates folder but the framework
#guesses that out of the file path.
from zen_garden.views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^javapic/', include(javapic_urls)),
    url(r'^zen_garden/$', zen_garden_render),
    url(r'^javapic/$', javapic_render),
]