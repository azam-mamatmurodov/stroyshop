from django import forms
from django.contrib.auth import get_user_model
from django.utils.translation import ugettext as _
User = get_user_model()


class LoginForm(forms.Form):
    username = forms.CharField(max_length=60)
    passwd = forms.CharField(widget=forms.PasswordInput(), max_length=60)

    def clean(self):
        clean_data = super().clean()
        return clean_data


class RegisterForm(forms.ModelForm):
    first_name = forms.CharField(label=_('Fullname'))
    password = forms.CharField(widget=forms.PasswordInput(), label=_('Password'))
    confirm_password = forms.CharField(widget=forms.PasswordInput(), label=_('Confirm password'))

    class Meta:
        model = User
        fields = ['first_name', 'phone', 'password', ]

    def clean(self):
        cleaned_data = super().clean()

        if cleaned_data.get('password') != cleaned_data.get('confirm_password'):
            self.add_error('confirm_password', _('Passwords not match'))
        return cleaned_data

    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.set_password(self.cleaned_data.get('password'))
        instance.save()
        return instance

