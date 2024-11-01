from django.http import HttpResponseRedirect
from django.urls import reverse
from django.utils.deprecation import MiddlewareMixin
import re


class CheckURLMiddleware(MiddlewareMixin):
    @staticmethod
    def process_request(request):
        restricted_url = '/api/'
        home_url = reverse('home')
        file_pattern = re.compile(r"\.\w+$")

        if not request.path.startswith(restricted_url) and not file_pattern.search(request.path):
            if request.session.get('redirected'):
                request.session['redirected'] = False
                request.session['redirected_url'] = request.path
                return HttpResponseRedirect(home_url)
            else:
                request.session['redirected'] = True
            return None

        return None

