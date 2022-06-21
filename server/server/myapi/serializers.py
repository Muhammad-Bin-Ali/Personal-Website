from .models import Project, ProjectImage
from rest_framework import serializers 

class ProjectImageSerializer(serializers.ModelSerializer):
    # image_url = serializers.SerializerMethodField()

    class Meta:
        model = ProjectImage
        fields = ['image']

    # def get_image_url(self, project_image):
    #     return project_image.photo.url

    #     # request = self.context.get('request')
    #     # image_url = project_image.photo.url
    #     # return request.build_absolute_uri(image_url)


class ProjectSerializer(serializers.ModelSerializer):
    # images = ProjectImageSerializer(many=True, read_only=True)
    images = serializers.SerializerMethodField()

    def get_images(self, obj):
        images = obj.projectimage_set.all()
        return ProjectImageSerializer(instance=images, many=True, context=self.context).data

    class Meta:
        model = Project
        fields = ('name', 'description', 'github_link', 'images')

