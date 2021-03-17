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
wallet = _wallet.FileSystenWallet(app.config["WALLET_PATH"])

async def connectToNetwork(userName):
    gateway = _gateway.Gateway()
        
    userExists = wallet.exists(userName) # Check to see if we've already enrolled the user.
    if not userExists: 
        response = f"An identity for the user ' + {userName} + ' does not exist in the wallet"
        # console.log('Run the registerUser.js application before retrying');
        # let response = {};
        # response.error = 'An identity for the user ' + userName + ' does not exist in the wallet. Register ' + userName + ' first';
        # return response;
        return response
    await gateway.connect(app.config["connectionFile"], \
            {'wallet': wallet, 
            'identity': userName,
            'discovery': app.config.gatewayDiscovery })
    network = gateway.networks.get("network_name")
    if not network:
        print(12344342)
        # throw error
        pass
    print("1234542")
    return network
            
# adminExists = wallet.exists(app.config.appAdmin)    # Check to see if we've already enrolled the admin user.
# if (not adminExists):
#     response = f"An identity for the admin user {app.config.appAdmin} does not exist in the wallet. Run the enrollAdmin.js application before retrying"
#     return response
 
# connectToNetwork(app.config["APP_ADMIN"])
from backend.models import Breed, BreedSchema
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html') # Return index.html 

@app.route('/register_voter',methods=['POST'])
def register():
    # transforming into JSON-serializable objects
    return jsonify([]) 
@app.route('/top_10',methods=['POST']) # getCurrentStanding
def registqer():
    # transforming into JSON-serializable objects
    return jsonify([]) 
@app.route('/queryAll',methods=['POST']) # queryAll
def registqer():
    # transforming into JSON-serializable objects
    return jsonify([]) 
@app.route('/cast_vote',methods=['POST']) # castBallot
def registqer():
    # transforming into JSON-serializable objects
    return jsonify([]) 
if __name__ == "__main__":
    app.run(debug=True)