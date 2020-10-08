from django.contrib import admin

# Register your models here.
from .models import Animal
from .models import AnimalType
from .models import Test

admin.site.register(Animal)
admin.site.register(AnimalType)
admin.site.register(Test)