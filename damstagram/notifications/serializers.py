from rest_framework import serializers
from . import models
from damstagram.users import serializers as user_serializers
from damstagram.images import serializers as image_serializers


class NotificationSerializer(serializers.ModelSerializer):

    notification_from = user_serializers.ListUserSerializer()
    notification_image = image_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = "__all__"