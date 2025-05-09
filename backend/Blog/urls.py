from django.urls import path

from . import views

urlpatterns = [
    path("list/",views.showList ),
    # path("details/<int:id>",views.showList ),
    path("create",views.addBlog),
    path("update/<int:id>",views.updateBlog),
    path("delete/<int:id>",views.deleteBlog),

]
