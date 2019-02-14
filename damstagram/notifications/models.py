from django.db import models
from damstagram.users import models as user_models
from damstagram.images import models as image_models

# Create your models here.

class Notification(image_models.TimeStampedModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow'),
    )

    notification_from = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name='note_from')
    notification_to = models.ForeignKey(user_models.User, on_delete=models.CASCADE, related_name='note_to')
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    notification_image = models.ForeignKey(image_models.Image, on_delete=models.CASCADE, null=True, blank=True)
    notification_comment = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return 'From: {} - To: {}'.format(self.notification_from, self.notification_to)