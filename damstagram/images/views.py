from rest_framework.views import APIView   
    # to get and show elements, and to handle methods easier
from rest_framework.response import Response
from . import models, serializers


# from django.shortcuts import render
# The render() is used for template. But the app will only use API, so will not be used.


# this class is only for test to who all images. In real, this is not acceptable. The server will blow up.
class ListAllImages(APIView):

    def get(self, request, format=None):
        """
        request: request object from client, such as get, post, delete.
        format: ex) json, xml, and etc. default is None.
        """

        all_images = models.Image.objects.all()

        serializer = serializers.ImageSerializer(all_images, many=True)

        return Response(data=serializer.data)


class ListAllComments(APIView):

    def get(self, request, format=None):

        all_comments = models.Comment.objects.all()

        serializer = serializers.CommentSerializer(all_comments, many=True)

        return Response(data=serializer.data)


class ListAllLikes(APIView):

    def get(self, request, format=None):

        all_likes = models.Like.objects.all()

        serializer = serializers.LikeSerializer(all_likes, many=True)

        return Response(data=serializer.data)