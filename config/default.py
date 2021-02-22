import os
import re
from os import environ

basedir = os.path.abspath(os.path.dirname(__file__))

JSON_SORT_KEYS = False  # CRITICAL.  Do not sort the data when returning values to the front end.

API_TOKEN = environ.get('API_TOKEN', default="CHANGE_THIS_IN_PROD")

NAME = "Woof Voter"
FLASK_PORT = environ.get('FLASK_PORT', default="5000")
# CORS_ALLOW_ORIGINS = re.split(r',\s*', environ.get('CORS_ALLOW_ORIGINS', default="localhost:4200, localhost:5002,  localhost:5000"))

# Add trailing slash to base path, typically this would be something like "/api/" don't use the full path!

# APPLICATION_ROOT = re.sub(r'//', '/', '/%s/' % environ.get('APPLICATION_ROOT', default="/").strip('/'))
# The full path to get to this, this is what would be returned form flask's request.url_root, but we won't
# have access to that in scheduled tasks run outside a request, this should include and match the APPLICATION_ROOT
# with no trailing backslask

# URL_ROOT = environ.get('URL_ROOT', default="http://localhost:5000")

DB_HOST = environ.get('DB_HOST', default="sql3.freemysqlhosting.net")
DB_PORT = environ.get('DB_PORT', default="3306")
DB_NAME = environ.get('DB_NAME', default="sql3393896")
DB_USER = environ.get('DB_USER', default="sql3393896")
DB_PASSWORD = environ.get('DB_PASSWORD', default="R6VwdHsCqW")

SQLALCHEMY_DATABASE_URI = environ.get(
    'SQLALCHEMY_DATABASE_URI',
    default="mysql://%s:%s@%s:%s/%s" % (DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME)
)

SQLALCHEMY_TRACK_MODIFICATIONS=False
print('SQLALCHEMY_DATABASE_URI = ', SQLALCHEMY_DATABASE_URI)
