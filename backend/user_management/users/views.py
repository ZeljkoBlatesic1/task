from django.shortcuts import render
from django.http import JsonResponse
from .models import User, Role
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
def get_users(request):
    users = User.objects.all()
    user_data = [{'id': user.id, 'username': user.first_name} for user in users]
    return JsonResponse({'users': user_data})
    # Create a JSON response with the user data
    # Serialize the users data as JSON and return a JSON response
    # Convert the users data to a JSON format


def get_roles(request):
    roles = Role.objects.all()
    roles_data = [{'id': role.id, 'name': role.name} for role in roles]
    return JsonResponse({'roles': roles_data})


@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        try:
            # Extract the data from the request body
            data = json.loads(request.body)

            # Perform validation on the received data
            if 'id' not in data:
                raise ValueError('Id is required.')
            if 'first_name' not in data:
                raise ValueError('First name is required.')
            if 'last_name' not in data:
                raise ValueError('Last name is required.')
            if 'email' not in data:
                raise ValueError('Email is required.')
            if 'password' not in data:
                raise ValueError('Password is required.')
            if 'role_id' not in data:
                raise ValueError('Role is required.')

            # Create a new user object
            # Replace this with your actual model and field names
            user = User.objects.create(
                id=data['id'],
                first_name=data['first_name'],
                last_name=data['last_name'],
                email=data['email'],
                password=data['password'],
                role_id=data['role_id'],
            )

            # Return a success response
            return JsonResponse({'message': 'User created successfully.'})

        except Exception as e:
            # Handle any errors that occurred during user creation
            return JsonResponse({'error': str(e)}, status=400)

    # Return an error response for unsupported HTTP methods
    return JsonResponse({'error': 'Invalid request method.'}, status=405)


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
