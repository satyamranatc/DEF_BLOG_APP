from django.urls import path

from . import views

urlpatterns = [
    path("list/",views.showList ),
    path("create",views.addBlog),

]
