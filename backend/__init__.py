from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask import Flask, jsonify

from flask_migrate import Migrate, MigrateCommand

app = Flask(__name__)
app.config.from_object('config.default')
CORS(app=app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from backend.models import Breed, BreedSchema
# Returns all information about stored dog breeds
@app.route('/breeds')
def get_exams():
    breed_objects = session.query(Breed).all()

    # transforming into JSON-serializable objects
    return BreedSchema(many=True).dump(breed_objects) # jsonify(exams.data)

if __name__ == "__main__":
    app.run(debug=True)