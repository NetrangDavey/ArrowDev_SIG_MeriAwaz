from django.urls import path
from .views import CreateUserView, LoginView,LogoutView,ProblemListCreateView

urlpatterns = [
#    path('/login'),
#    path('/signin'),
#    path('/getIssues'),
#    path('/sayIssue'),
#    path('/user'),
#    path('/user/myProblems'),
    path('register/', CreateUserView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
     path('problems/', ProblemListCreateView.as_view(), name='problem-list-create'),
    # path('problems/<int:pk>/', ProblemDetailView.as_view(), name='problem-detail'),
]