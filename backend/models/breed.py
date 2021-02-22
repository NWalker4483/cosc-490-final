from backend import db
from sqlalchemy import Column, String

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema


class Breed(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    image_url = db.Column(db.String(256))
    description = db.Column(db.String(256))
class BreedSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Breed
        load_instance = True
        include_relationships = True
        include_fk = True  # Includes foreign keys