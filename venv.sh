#!/bin/bash

#create the virtual enviroment venv
python3 -m venv venv

#activate the virtual environment
source venv/bin/activate

pip install django
pip install djangorestframework #django rest framework
pip install markdown       # Markdown support for the browsable API.
pip install django-filter  # Filtering support
