from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask import Flask, jsonify, request

from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object('config.default')
CORS(app=app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from backend.models import Breed, BreedSchema
# Returns all information about stored dog breeds
@app.route('/breeds')
def get_breeds():
    breed_objects = db.session.query(Breed).limit(25).all()
    # if key doesn't exist, returns None
    website = request.args.get('website')
    
    # transforming into JSON-serializable objects
    return jsonify(BreedSchema(many=True).dump(breed_objects))

if __name__ == "__main__":
    app.run(debug=True)