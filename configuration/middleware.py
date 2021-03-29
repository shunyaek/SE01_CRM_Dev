import json
from django.utils.deprecation import MiddlewareMixin
from configuration.settings import JWT_AUTH_REFRESH_COOKIE


class MoveJWTRefreshCookieIntoTheBody(MiddlewareMixin):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_view(self, request, view_func, *view_args, **view_kwargs):
        if (
            request.path == "/token/refresh/"
            and JWT_AUTH_REFRESH_COOKIE in request.COOKIES
        ):
            if request.body != b"":
                data = json.loads(request.body)
                data["refresh"] = request.COOKIES[JWT_AUTH_REFRESH_COOKIE]
                request._body = json.dumps(data).encode("utf-8")
            else:
                print("The incoming request body must be set to an empty object.")

        return None