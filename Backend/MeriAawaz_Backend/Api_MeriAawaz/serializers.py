from .models import CustomUser,Problem  # Import your custom user model
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser  # Use the custom user model
        fields = ['id', 'username', 'password', 'role']  # Add 'role' here
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(**validated_data)
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem
        fields = ['id', 'title', 'description', 'author', 'status', 'created_at', 'path']
        extra_kwargs={"author":{'read_only':True}}