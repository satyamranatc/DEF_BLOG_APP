from rest_framework.decorators import api_view
from rest_framework.response import Response



Blogs = [
    {
        "id":1,
        "poster":"https://placehold.co/600x400",
        "title":"Blog 1",
        "content":"Blog 1 Content",
        "author":"Author 1"
    },
    {
        "id":2,
        "poster":"https://placehold.co/600x400",
        "title":"Blog 2",
        "content":"Blog 2 Content",
        "author":"Author 2"
    },{
        "id":3,
        "poster":"https://placehold.co/600x400",
        "title":"Blog 3",
        "content":"Blog 3 Content",
        "author":"Author 3"
    }
]

@api_view(["GET"])
def showList(request):
    return Response({
        "blogs":Blogs
    })


@api_view(["POST"])
def addBlog(request):
    
    Blogs.append(request.data)
    return Response({
        "message":"Blog Added"
    })


@api_view(["DELETE"])
def deleteBlog(request,id):
    
    for i in Blogs:
        if int(i["id"]) == id:
            print(i)
            Blogs.remove(i)
            break
    else:
        return Response({
            "message":"Blog Not Found"
        })

    return Response({
        "message":"Blog Deleted"
    })