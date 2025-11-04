from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def root(request):
    return JsonResponse({"message": "Task Manager API is running!"})

urlpatterns = [
    path('', root),
    path('admin/', admin.site.urls),
    path('api/', include('tasks.urls')),
]