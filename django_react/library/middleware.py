from django.http import HttpResponseRedirect
from django.urls import reverse
from django.utils.deprecation import MiddlewareMixin
import re


class CheckURLMiddleware(MiddlewareMixin):
    @staticmethod
    def process_request(request):
        restricted_urls = ['/api/', '/admin']
        file_pattern = re.compile(r"\.\w+$")  # Regex to check for file extensions

        # Use map() to check if request.path starts with any restricted URL
        is_restricted = any(map(request.path.startswith, restricted_urls))

        # If the path is not restricted and does not match a file pattern
        if not is_restricted and not file_pattern.search(request.path):
            # Render the HomeView
            view = HomeView.as_view()
            response = view(request)
            response.render()
            return response

        return None

