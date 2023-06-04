from django.shortcuts import render
from django.http import JsonResponse
from .models import User, Role

# Create your views here.
def get_users(request):
    users = User.objects.all()
    user_data = [{'id': user.id, 'username': user.name} for user in users]
    return JsonResponse({'users': user_data})
    # Create a JSON response with the user data
    # Serialize the users data as JSON and return a JSON response
    # Convert the users data to a JSON format


def get_roles(request):
    roles = Role.objects.all()
    roles_data = [{'id': role.id, 'username': role.name} for role in roles]
    return JsonResponse({'roles': roles_data})

# def create_user(request):
    # Logic to create a new user based on the request data
    # Save the user to the database
    # Return a JSON response indicating success or failure


# def get_user(request, id):
    # user = User.objects.get(id=id)
    # Serialize the user data as JSON and return a JSON response


# def update_user(request, id):
    # Logic to update a specific user's information based on the request data
    # Save the updated user to the database
    # Return a JSON response indicating success or failure


# def delete_user(request, id):
    # Logic to delete a specific user from the database
    # Return a JSON response indicating success or failure
