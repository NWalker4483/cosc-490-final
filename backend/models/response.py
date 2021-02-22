from backend import db
from sqlalchemy import Column, String

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema


class Response(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)

class ResponseSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Response
        load_instance = True
        include_relationships = True
        include_fk = True  # Includes foreign keys