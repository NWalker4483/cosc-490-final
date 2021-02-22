from backend import db
from sqlalchemy import Column, String

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)

class QuestionSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Question
        load_instance = True
        include_relationships = True
        include_fk = True  # Includes foreign keys