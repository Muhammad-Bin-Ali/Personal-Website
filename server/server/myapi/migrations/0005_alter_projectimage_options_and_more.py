# Generated by Django 4.0.5 on 2022-06-10 20:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0004_alter_project_options_alter_projectimage_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='projectimage',
            options={'ordering': ['order']},
        ),
        migrations.RenameField(
            model_name='projectimage',
            old_name='my_order',
            new_name='order',
        ),
    ]