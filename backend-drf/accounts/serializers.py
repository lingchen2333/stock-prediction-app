from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6 ,style={'input_type': 'password'})
    class Meta:
        model = User
        fields= ['username', 'email', 'password']
        
    def create(self, validated_data):
        # User.objects.create: save the password in plain text
        # User.objects.create_user: hash the password
        # user = User.objects.create_user(
        #     validated_data['username'],
        #     validated_data['email'],
        #     validated_data['password']
        # )
        user = User.objects.create_user(**validated_data)
        return user