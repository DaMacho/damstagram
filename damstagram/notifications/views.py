from rest_framework.views import APIView   
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers


class Notifications(APIView):

    def get(self, request, format=None):

        user = request.user

        notifications = models.Notification.objects.filter(notification_to=user)

        serializer = serializers.NotificationSerializer(notifications, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


def create_notification(note_from, note_to, note_type, image=None, comment=None):

    print(note_from, note_to, note_type, image, comment)

    notification = models.Notification.objects.create(
        notification_from=note_from,
        notification_to=note_to,
        notification_type=note_type,
        notification_image=image,
        notification_comment=comment
    )

    notification.save()