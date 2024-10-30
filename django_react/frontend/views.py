from django.shortcuts import render
from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = 'frontend/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if 'redirected_url' in self.request.session:
            context['reload_url'] = self.request.session['redirected_url']
        return context
