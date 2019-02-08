from rest_framework.views import APIView   
    # to get and show elements, and to handle methods easier
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers


# from django.shortcuts import render
# The render() is used for template. But the app will only use API, so will not be used.


class Feed(APIView):

    def get(self, request, format=None):

        user = request.user
        following_users = user.following.all()
        image_list = []

        for following_user in following_users:
            user_images = following_user.images.all()[:2]

            for image in user_images:
                image_list.append(image)

        sorted_list = sorted(image_list, key=lambda image: image.created_at, reverse=True)
        serializer = serializers.ImageSerializer(sorted_list, many=True)

        return Response(serializer.data)


class LikeImage(APIView):

    def get(self, request, image_id, format=None):

        user = request.user

        # check the image is exist or not
        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # check the like already exist or not
        try:
            preexisting_like = models.Like.objects.get(
                creator=user,
                image=found_image
            )
            preexisting_like.delete()

            return Response(status=status.HTTP_204_NO_CONTENT)

        except models.Like.DoesNotExist:

            new_like = models.Like.objects.create(
                creator=user,
                image=found_image
            )

            new_like.save()
        
        return Response(status=status.HTTP_201_CREATED)





###############################
# these classes are only for test to who all images. In real, this is not acceptable. The server will blow up.
# class ListAllImages(APIView):

#     def get(self, request, format=None):
#         """
#         request: request object from client, such as get, post, delete.
#         format: ex) json, xml, and etc. default is None.
#         """

#         all_images = models.Image.objects.all()
#         serializer = serializers.ImageSerializer(all_images, many=True)

#         return Response(data=serializer.data)


# class ListAllComments(APIView):

#     def get(self, request, format=None):

#         user_id = request.user.id

#         # all_comments = models.Comment.objects.all()
#         all_comments = models.Comment.objects.filter(creator=user_id)
#         serializer = serializers.CommentSerializer(all_comments, many=True)

#         return Response(data=serializer.data)


# class ListAllLikes(APIView):

#     def get(self, request, format=None):

#         all_likes = models.Like.objects.all()
#         serializer = serializers.LikeSerializer(all_likes, many=True)

#         return Response(data=serializer.data)