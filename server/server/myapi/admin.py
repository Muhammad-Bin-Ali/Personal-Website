from django.contrib import admin
from .models import Project, ProjectImage
from adminsortable2.admin import SortableAdminMixin, SortableInlineAdminMixin

class ProjectImageInline(SortableInlineAdminMixin, admin.StackedInline):
    model = ProjectImage
    extra = 0

@admin.register(Project)
class ProjectAdmin(SortableAdminMixin, admin.ModelAdmin):
    inlines = [ProjectImageInline, ]

# admin.site.register(Project, ProjectAdmin)
