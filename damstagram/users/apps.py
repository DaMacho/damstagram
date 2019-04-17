from django.apps import AppConfig


class UsersAppConfig(AppConfig):

    name = "damstagram.users"
    verbose_name = "Users"

    def ready(self):
    #     try:
    #         import users.signals  # noqa F401
    #     except ImportError:
    #         pass
        """Override this to put in:
            Users system checks
            Users signal registration
        """

        from .signals import user_signed_up
