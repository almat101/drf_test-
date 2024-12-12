# drf_test-
### Create a django project
```bash
django-admin stratproject test_service
```
### Create the app
```bash
cd test_service
pyhton3 manage.py startapp api
```

### Register the app and the restframework
in setting.py add the app and rest_framework to the list of app

```pyhton
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'api',
]
```

### Create your models
Models are python classes that represent the structure of your database tables.

#### Generate the migration file. This file contain instruction for applying changes to your databases.Change that you made in models.py, the models represent the database structure as python classes.

```bash
python3 manage.py makemigrations
```

### Apply the migration

#### this command execute the SQL command defined in the migration file.

```bash
python3 manage.py migrate
```
## DRF overviews

Django Rest Framework (DRF) is a powerful and flexible toolkit for building **RESTful APIs** in **Django**, a Python-based web framework. DRF simplifies the process of creating web APIs by providing components and abstractions for common tasks like serialization, authentication, authorization, and request handling.

> An API (Application Programming Interface) is a set of rules and protocols that allows one software application to interact with another. It acts as a bridge that lets different applications communicate and exchange data, even if they are built using different technologies.

### Key Features of Django Rest Framework:
1. **Serialization**:
   - Converts complex data types like Django models or querysets into JSON or other formats that can be sent over the web.
   - Handles deserialization, turning JSON data back into Django objects.

2. **ViewSets and Routers**:
   - ViewSets simplify the process of writing API views by grouping common logic.
   - Routers automatically generate URL patterns for your APIs based on the ViewSets.

3. **Authentication and Permissions**:
   - Supports multiple authentication mechanisms (e.g., Token, Session, OAuth).
   - Provides fine-grained permission control for protecting API endpoints.

4. **Browsable API**:
   - Offers a web-based, interactive interface for exploring and testing APIs during development, making debugging and documentation easier.

5. **Generic Views**:
   - Includes generic views and mixins to handle common API patterns like listing, creating, retrieving, updating, and deleting resources.

6. **Pagination**:
   - Built-in support for paginating large datasets.

7. **Throttling**:
   - Helps control the rate of API requests, preventing abuse or overuse of the system.

8. **Validation**:
   - Validates incoming data automatically, ensuring data integrity when saving or updating models.

9. **Third-Party Extensions**:
   - A rich ecosystem of third-party packages that add features like OpenAPI documentation generation (e.g., with **drf-yasg** or **Django Rest Framework Spectacular**).

### Why Use DRF?
- It saves development time by automating many repetitive tasks associated with building APIs.
- It integrates seamlessly with Django, leveraging its ORM and other components.
- It provides a clean, reusable, and testable structure for API development.

### Example:
Here’s a simple example of a Django Rest Framework API for a `Book` model:

#### models.py
```python
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    published_date = models.DateField()
```

#### serializers.py
```python
from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'
```

#### views.py
```python
from rest_framework.viewsets import ModelViewSet
from .models import Book
from .serializers import BookSerializer

class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
```

#### urls.py
```python
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import BookViewSet

router = DefaultRouter()
router.register('books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```

This setup automatically provides API endpoints for listing, creating, retrieving, updating, and deleting `Book` records at `/books/`.

