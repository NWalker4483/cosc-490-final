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
loop = asyncio.get_event_loop()

# * TODO Add Error Catching to all endpoint
def connectToNetwork(userName):
    wallet = _wallet.FileSystenWallet(app.config["WALLET_PATH"])

    userExists = wallet.exists(userName) # Check to see if we've already enrolled the user.
    if not userExists: 
        response = f"An identity for the user ' + {userName} + ' does not exist in the wallet"
        return response
    
    gateway = _gateway.Gateway()

    response = loop.run_until_complete(gateway.connect(app.config["CONNECTION_FILE"], \
        options = {'wallet': wallet, 
        'identity': userName,
        'discovery': app.config["GATEWAY_DISCOVERY"]}))

    network = gateway.networks.get(app.config["CHANNEL_NAME"])
    assert(network != None)
    contract = network.get_contract(app.config["CONTRACT_NAME"])

    return {
      'contract': contract,
      'network': network,
      'gateway': gateway
    }

def invoke(networkObj, isQuery, func, args = None):
    if isQuery:
        if args:
            pass
            response = loop.run_until_complete(networkObj["contract"].evaluateTransaction(func, args))

            # await networkObj.gateway.disconnect();
    
            # return response;
        else:
            pass
            # let response = await networkObj.contract.evaluateTransaction(func);
            # console.log(response);
            # console.log(`Transaction ${func} without args has been evaluated`);
    
            # await networkObj.gateway.disconnect();
    
            # return response;
        pass
    else:
        if args:
            pass
        else:
            pass
    pass

def registerVoter(voterId, registrarId, firstName, lastName):
    wallet = _wallet.FileSystenWallet(app.config["WALLET_PATH"])

    userExists = wallet.exists(voterId) # Check to see if we've already enrolled the user.

    if userExists: 
        response = f"An identity for the user ' + {voterId} + ' already exists in the wallet"
        return response
    
    adminExists = wallet.exists(app.config["APP_ADMIN"])    # Check to see if we've already enrolled the admin user.
    
    if not adminExists:
        response = f"An identity for the admin user {app.config['APP_ADMIN']} does not exist in the wallet. Run the enrollAdmin.js application before retrying"
        return response

    gateway = _gateway.Gateway()

    response = loop.run_until_complete(gateway.connect(app.config["CONNECTION_FILE"], \
        options = {'wallet': wallet, 
        'identity': app.config["APP_ADMIN"],
        'discovery': app.config["GATEWAY_DISCOVERY"]}))

    # // Get the CA client object from the gateway for interacting with the CA.
    # const ca = gateway.getClient().getCertificateAuthority();
    # const adminIdentity = gateway.getCurrentIdentity();
    # console.log(`AdminIdentity: + ${adminIdentity}`);

    # // Register the user, enroll the user, and import the new identity into the wallet.
    # const secret = await ca.register({ affiliation: '', enrollmentID: voterId, role: 'client' }, adminIdentity);

    # const enrollment = await ca.enroll({ enrollmentID: voterId, enrollmentSecret: secret });
    # const userIdentity = await X509WalletMixin.createIdentity(orgMSPID, enrollment.certificate, enrollment.key.toBytes());
    # await wallet.import(voterId, userIdentity);
    # console.log(`Successfully registered voter ${firstName} ${lastName}. Use voterId ${voterId} to login above.`);
    # let response = `Successfully registered voter ${firstName} ${lastName}. Use voterId ${voterId} to login above.`;
    # return response;

 
print(connectToNetwork(app.config["APP_ADMIN"]))
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