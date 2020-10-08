from django.shortcuts import render
from .models import Animal
from .models import AnimalType
from .serializers import AnimalSerializer
from .serializers import AnimalTypeSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class allAnimalList(APIView):
        
        def get(self, request, format=None):
                animals = Animal.objects.all()
                serializer = AnimalSerializer(animals, many=True)
                return Response(serializer.data)
        
        # def post(self, request, format=None):
        #         serializer = AnimalSerializer(data=request.data)
        #         if serializer.is_valid():
        #                 serializer.save()
        #                 return Response(serializer.data, status=status.HTTP_201_CREATED)
        #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class idAnimalList(APIView):
        # def get_object(self, pk):
        #         try:
        #                 return Animal.objects.get(pk=pk)
        #         except Animal.DoesNotExist:
        #                 raise Http404
        
        def get(self, request, format=None):
                animals = Animal.objects.all()
                serializer = AnimalSerializer(animals, many=True)
                return Response(serializer.data)

        def delete(self, request, pk, format=None):
                animals = Animal.objects.get(pk=id)
                animals.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)

class AnimalList(APIView):
        
        def post(self, request, format=None):
                serializer = AnimalSerializer(data=request.data)
                if serializer.is_valid():
                        serializer.save()
                        return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class AnimalTypeList(APIView):

        def get(self, request, format=None):
                animals = AnimalType.objects.all()
                serializer = AnimalTypeSerializer(animals, many=True)
                return Response(serializer.data)

# class AnimalDetail(APIView):
#     """
#     Retrieve, update or delete a snippet instance.
#     """
#     def get_object(self, pk):
#         try:
#             return Animal.objects.get(pk=pk)
#         except Animal.DoesNotExist:
#             raise Http404

#     def get(self, request, pk, format=None):
#         snippet = self.get_object(pk)
#         serializer = AnimalSerializer(snippet)
#         return Response(serializer.data)

#     def put(self, request, pk, format=None):
#         snippet = self.get_object(pk)
#         serializer = AnimalSerializer(snippet, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk, format=None):
#         animal = self.get_object(pk)
#         animal.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


        ##!Denne funker litt hverfall!##
# from rest_framework.generics import ListAPIView
# from .models import Animaltype, Animal
# from .serializers import AnimaltypeSerializer
# from django.views.generic import TemplateView

# class AnimaltypeView (ListAPIView):
#     queryset = Animaltype.objects.all()
#     serializer_class = AnimaltypeSerializer

# class IndexView(TemplateView):
#     template_name = 'index.html'






