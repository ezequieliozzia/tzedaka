from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import json
from pprint import pprint
from simple_salesforce import Salesforce, format_soql

# WINDOWS: python -m flask --app main run
# MAC: flask run

with open("login.json", "r") as login_file:
    creds = json.load(login_file)

sf = Salesforce( username        = creds['login']['username'],
                 password        = creds['login']['password'],
                 instance        = creds['login']['instance'],
                 consumer_key    = creds['login']['consumer_key'],
                 consumer_secret = creds['login']['consumer_secret'] )

customEntities = sf.query("SELECT Id, Name  FROM Beneficiario__c LIMIT 10")
accountEntities = sf.query("SELECT Id, Name  FROM Account LIMIT 10")

activeUser = 0

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def home():
    return "Home"

@app.route("/getUser", methods=['GET'])
@cross_origin()
def getUser():
    return accountEntities

@app.route("/<int:ActiveUser>", methods=['POST'])
@cross_origin()
def setUser(ActiveUser):
    activeUser = ActiveUser
    return jsonify({"ActiveUser": activeUser})