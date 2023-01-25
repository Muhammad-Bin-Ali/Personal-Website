from .models import Project, ProjectImage
from rest_framework import serializers 

class ProjectImageSerializer(serializers.ModelSerializer):
    # image_url = serializers.SerializerMethodField()

    class Meta:
        model = ProjectImage
        fields = ['image']

class ProjectSerializer(serializers.ModelSerializer):
    #Calls on the method named get_images
    images = serializers.SerializerMethodField()

    def get_images(self, obj):
        images = obj.projectimage_set.all() #retrieves all images associated with obj (the project in question)
        return ProjectImageSerializer(instance=images, many=True, context=self.context).data 

    class Meta:
        model = Project
        fields = ('name', 'description', 'github_link', 'images') #generates JSON for data to be returned

