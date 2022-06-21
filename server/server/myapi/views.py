from rest_framework import viewsets 
from .serializers import ProjectSerializer
from .models import Project

#Viewsets only offer retrieve and list methods. Makes it easier to handle GET requests
class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

