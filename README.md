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

#### Generate the migration file. This file contain instruction for applying changes to your databases.Change that you made in models.py, the models represent the database structure as python classes.

```bash
python3 manage.py makemigrations
```

### Apply the migration

#### this command execute the SQL command defined in the migration file.

```bash
python3 manage.py migrate
```
## DRF overviewsew

Django REST Framework (DRF) is a powerful toolkit for building RESTful APIs in Django. It provides tools and utilities to easily create web APIs while adhering to RESTful principles.


> An API (Application Programming Interface) is a set of rules and protocols that allows one software application to interact with another. It acts as a bridge that lets different appli cations communicate and exchange data, even if they are built using different technologies.
