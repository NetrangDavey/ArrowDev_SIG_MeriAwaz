from .models import CustomUser,Problem  # Import your custom user model
from .serializers import UserSerializer,LoginSerializer,ProblemSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import ValidationError
from django.contrib.auth import authenticate


class CreateUserView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()  # Use the custom user model
    serializer_class = UserSerializer  # Use the updated serializer
    permission_classes = [AllowAny]

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer  # Specify the serializer class
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        user = authenticate(username=username, password=password)

        if user is not None:
            # You can add token generation here
            token, created = Token.objects.get_or_create(user=user)
            return Response({'message': 'Login successful', 'role': user.role , 'token': token.key})
        return Response({'error': 'Invalid Credentials'}, status=400)

class LogoutView(generics.GenericAPIView):

    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # Delete the user's token
        try:
            token = Token.objects.get(user=request.user)
            token.delete()
            return Response({'message': 'Logged out successfully.'}, status=204)
        except Token.DoesNotExist:
            return Response({'error': 'No active token found.'}, status=400)
        
class ProblemListCreateView(generics.ListCreateAPIView):
    serializer_class = ProblemSerializer
    permission_classes = [IsAuthenticated] 
    # permission_classes = [AllowAny] 

    def  get_queryset(self):
        user=self.request.user
        return Problem.objects.filter(author=user)
        # return Problem.objects.all()

    def perform_create(self,serializer):
        if(serializer.is_valid()):
            if  self.request.user.is_authenticated:
                serializer.save(author=self.request.user)
            else:
                raise ValidationError("You must be logged in to create a problem.")
        else:
            print(serializer.errors)

    

# class ProblemDetailView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Problem.objects.all()
#     serializer_class = ProblemSerializer
#     permission_classes = [IsAuthenticated]