from django.shortcuts import render, redirect
from django import forms
# Create your views here.

class TestForm(forms.Form):
    start_date = forms.TextInput()
    end_date_time = forms.TextInput()


def index(request):
    print(request.method)
    if request.method == 'POST':
        form = TestForm(request.POST)
        if form.is_valid():
            print(form.cleaned_data)
            # request.session['start_date'] = form.cleaned_data['start_date']
            # request.session['end_date_time'] = form.cleaned_data['end_date_time']
            return redirect('success')
        print(form.errors)
        return render(request, 'todos/index.html', {'form': form})

    form = TestForm()
    return render(request, 'todos/index.html', {'form': form})


def success(request):
    start_date = request.session.get('start_date')
    end_date_time = request.session.get('end_date_time')
    return render(request, 'todos/success.html', {'start_date': start_date, 'end_date_time': end_date_time})
