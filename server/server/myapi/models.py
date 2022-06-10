from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=40)
    description = models.CharField(max_length=150)
    github_link = models.URLField()

    my_order = models.PositiveIntegerField(default=0, blank=False, null=False)


    def __str__ (self):
        return (self.name + " -- " + self.github_link)

    class Meta:
        ordering = ["my_order"]

class ProjectImage(models.Model):
    #creating a many-to-one relationship. Many ProjectImages are related with one Project.
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="project_images")

    order = models.PositiveIntegerField(default=0, blank=False, null=False)

    class Meta:
        ordering = ["order"]