from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask import Flask, jsonify, request, render_template

from flask_migrate import Migrate

from hfc.fabric_network import wallet as _wallet
from hfc.fabric_network import gateway as _gateway
import asyncio
app = Flask(__name__)
app.config.from_object('config.default')
CORS(app=app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
wallet = _wallet.FileSystenWallet(app.config["walletPath"])

async def connectToNetwork(userName):
    gateway = _gateway.Gateway()

    userExists = wallet.exists(userName) # Check to see if we've already enrolled the user.
    if not userExists: 
        response = f"An identity for the user ' + {userName} + ' does not exist in the wallet"
        return response
    await gateway.connect(app.config["connectionFile"], \
            {'wallet': wallet, 
            'identity': userName,
            'discovery': app.config["gatewayDiscovery"] })
    network = gateway.networks.get(app.config["channelName"])
    if not network:
        print(12344342)
        pass
    print("1234542")
    return network
async def invoke():
    pass
async def registerVoter ():
    pass
# adminExists = wallet.exists(app.config.appAdmin)    # Check to see if we've already enrolled the admin user.
# if (not adminExists):
#     response = f"An identity for the admin user {app.config.appAdmin} does not exist in the wallet. Run the enrollAdmin.js application before retrying"
#     return response
 
# connectToNetwork(app.config["appAdmin"])
from backend.models import Breed, BreedSchema
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html') # Return index.html 

@app.route('/register_voter',methods=['POST'])
def register():
    # transforming into JSON-serializable objects
    return jsonify([]) 
@app.route('/validate_voter',methods=['POST'])
def validate():
    # transforming into JSON-serializable objects
    return jsonify([]) 
@app.route('/get_standings',methods=['POST']) # getCurrentStanding
def get_standings():
    # transforming into JSON-serializable objects
    return jsonify([]) 
@app.route('/query_all',methods=['GET']) # queryAll
def query_all():
    # transforming into JSON-serializable objects
    return jsonify([]) 
@app.route('/cast_vote',methods=['POST']) # castBallot
def cast_vote():
    # transforming into JSON-serializable objects
    return jsonify([]) 
if __name__ == "__main__":
    app.run(debug=True)