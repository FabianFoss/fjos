from rest_framework import serializers
from .models import Animal
from .models import AnimalType
from .models import Test

class AnimalSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Animal
        fields = ['id', 'name', 'type', 'age']
    

class AnimalTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnimalType
        fields = ['type']
    
    
class TestSelializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['Test']
    
    
    ##!Dette funker litt ihverfall!##
# from rest_framework import serializers
# from .models import Animaltype

# class AnimaltypeSerializer(serializers.ModelSerializer):
    

#     class Meta:
#         model = Animaltype
#         fields = ['type']

