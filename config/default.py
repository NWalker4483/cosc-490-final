import os
import re
import hfc
from os import environ

basedir = os.path.abspath(os.path.dirname(__file__))

JSON_SORT_KEYS = False  # CRITICAL. Do not sort the data when returning values to the front end.

NAME = "Woof Voter"
FLASK_PORT = environ.get('FLASK_PORT', default="5000")

DB_HOST = environ.get('DB_HOST', default="sql3.freemysqlhosting.net")
DB_PORT = environ.get('DB_PORT', default="3306")
DB_NAME = environ.get('DB_NAME', default="sql3393896")
DB_USER = environ.get('DB_USER', default="sql3393896")
DB_PASSWORD = environ.get('DB_PASSWORD', default="R6VwdHsCqW")

TESTING = environ.get('TESTING', default="true")

SQLALCHEMY_DATABASE_URI = environ.get(
    'SQLALCHEMY_DATABASE_URI',
    default="mysql://%s:%s@%s:%s/%s" % (DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME)
)

walletPath = environ.get('walletPath', default="wallet")
appAdmin = environ.get('appAdmin', default="app-admin")
appAdminSecret = "app-adminpw"

connectionFile = environ.get('connectionFile', default="ibpConnection.json")
channelName = "mychannel"
contractName = "voterContract"
orgMSPID = "votermsp"
caName = "https://169.57.85.193:32424"
userName = "V1"
gatewayDiscovery = { "enabled": True, "asLocalhost": False }

SQLALCHEMY_TRACK_MODIFICATIONS=False
print('SQLALCHEMY_DATABASE_URI = ', SQLALCHEMY_DATABASE_URI)
