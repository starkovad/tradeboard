from django.shortcuts import render
from .broker import apis

def index(request):
    return render(request, 'index.html')