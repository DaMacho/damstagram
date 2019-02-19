from django.conf.urls import url
from . import views

app_name = "images"
urlpatterns = [
    url(
        regex=r'^$',
        view=views.Images.as_view(),
        name='feed'
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/$',
        view=views.ImageDetail.as_view(),
        name='image_detail'
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/likes/$',
        view=views.LikeImage.as_view(),
        name='like_image'
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/unlikes/$',
        view=views.UnLikeImage.as_view(),
        name='unlike_image'
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/comments/$',
        view=views.CommentOnImage.as_view(),
        name='comment_image'
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/comments/(?P<comment_id>[0-9]+)/$',
        view=views.ModerateComments.as_view(),
        name='moderate_comments'
    ),
    url(
        regex=r'^comments/(?P<comment_id>[0-9]+)/$',
        view=views.Comment.as_view(),
        name='comments'
    ),
    url(
        regex=r'^search/$',
        view=views.Search.as_view(),
        name='search'
    ),
]


# /images/3/like/

## 0 create the url and the view
## 1 take the id from the url
# 2 want to find an image with the id
# 3 want to create a like for the image


#########################
# belows are testing urls
#     url(
#         regex=r'^all/$',
#         view=views.ListAllImages.as_view(),
#         name='all_images'
#     ),
#     url(
#         regex=r'^comments/$',
#         view=views.ListAllComments.as_view(),
#         name='all_comments'
#     ),
#     url(
#         regex=r'^likes/$',
#         view=views.ListAllLikes.as_view(),
#         name='all_likes'
#     ),
# ]
