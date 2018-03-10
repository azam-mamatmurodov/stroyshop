from django.views import generic
from django.shortcuts import redirect, reverse
from django.contrib.auth import login, authenticate

from users.forms import *
from main.modules import get_default


class LoginView(generic.FormView):
    template_name = 'pages/login.html'
    form_class = LoginForm

    def get_success_url(self):
        if 'next' in self.request.GET:
            next = self.request.GET['next']
            return next
        return reverse('main:home')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update(get_default(request=self.request))
        return context

    def form_valid(self, form):
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('passwd')
        user = authenticate(self.request, phone=username, password=password)

        if user:
            login(self.request, user=user)
            return redirect(to=self.get_success_url())
        else:
            form.add_error('username', 'invalid account credentials')
            return super().form_invalid(form=form)

    def form_invalid(self, form):
        return super().form_invalid(form=form)


class RegisterView(generic.FormView):
    template_name = 'pages/register.html'
    form_class = RegisterForm
    success_url = None

    def get_success_url(self):
        return reverse('main:home')

    def form_valid(self, form):
        user = form.save(commit=True)
        if authenticate(self.request, phone=user.phone, password=form.cleaned_data.get('password')):
            login(self.request, user=user)
        return super().form_valid(form=form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context.update(get_default(request=self.request))
        return context

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect(to=self.get_success_url())
        else:
            return super().dispatch(request=request, *args, **kwargs)
