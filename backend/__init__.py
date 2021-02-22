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
    return BreedSchema(many=True).dump(exam_objects) # jsonify(exams.data)

# @app.route('/survey', methods=['POST'])
# def add_exam():
#     # mount exam object
#     posted_exam = ExamSchema(only=('title', 'description'))\
#         .load(request.get_json())

#     exam = Exam(**posted_exam.data, created_by="HTTP post request")

#     # persist exam
#     session = Session()
#     session.add(exam)
#     session.commit()
   # return created exam
    # new_exam = ExamSchema().dump(exam).data
    # session.close()
    # return jsonify(new_exam), 201
if __name__ == "__main__":
    app.run(debug=True)