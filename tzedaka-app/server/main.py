from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import json
from pprint import pprint
from simple_salesforce import Salesforce, format_soql

# WINDOWS: python -m flask --app main run --debug
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

@app.route("/contactInfo", methods=['POST', 'GET'])
@cross_origin()
def contactInfo():
    if request.method == 'POST':
        email = request.json['email']
        error = None
        data = {}

        if not email:
            error = 'Email is required.'

        if error is None:
            try:
                query = sf.query("SELECT Padrino__r.Name, Padrino__r.Email, Padrino__r.npo02__MembershipJoinDate__c ,Donaci_n__r.npe03__Amount__c, Ahijado__r.Name, Ahijado__r.Programa__c, Ahijado__r.ltima_entrevista__c FROM Padrinazgo__c WHERE Padrino__r.Email = '" + email + "'")
                
                ahijados = []
                donaciones = []
                programa = []
                entrevista = []

                for entry in range(0,query['totalSize']):
                    ahijados.append( query['records'][entry]['Ahijado__r']['Name'] )
                    donaciones.append( query['records'][entry]['Donaci_n__r']['npe03__Amount__c'] )
                    programa.append( query['records'][entry]['Ahijado__r']['Programa__c'] )
                    entrevista.append( query['records'][entry]['Ahijado__r']['ltima_entrevista__c'] )

                contactInfo = {
                    'contacto': query['records'][0]['Padrino__r']['Name'], 
                    'fechaMembresia': query['records'][0]['Padrino__r']['npo02__MembershipJoinDate__c'],
                    'donaciones': donaciones,
                    'ahijados': ahijados,
                    'programa': programa,
                    'entrevista': entrevista
                    }
                
                data = {**contactInfo}
            except:
                data = {}

        return jsonify(data)

# Queries de prueba

# contact = sf.query("SELECT Name, AccountId from Contact WHERE Name='Padrino 3'")
# contact = sf.query( "SELECT Name FROM Contact WHERE Email != '' ")
# account = sf.query("SELECT Name FROM Account WHERE Id='0016S00003SZdCZQA1'")
# account = sf.query("SELECT Name FROM Account WHERE Email2__c !='' LIMIT 1")



# Query para obtener cuenta a partir del contacto
# account = sf.query("SELECT Name from Account WHERE Id in (SELECT AccountId FROM contact WHERE Name='Padrino 3')")
# padrino = sf.query("SELECT Valor_padrinazgo__c from Padrinazgo__c WHERE Padrino__c in (SELECT Id FROM contact WHERE Name='Padrino 3')")
# padrino = sf.query("SELECT Valor_padrinazgo__c from Padrinazgo__c WHERE Ahijado__c in (SELECT Id FROM Beneficiario__c WHERE Name='Iara Naomi De rosa')")

sf.query("SELECT Padrino__r.Name, Donaci_n__r.npe03__Amount__c, Ahijado__r.Name FROM Padrinazgo__c WHERE Valor_padrinazgo__c != null")

padrino = sf.query("SELECT Ahijado__r.Name, Padrino__r.Name, Padrino__r.Email, Padrino__r.npo02__MembershipJoinDate__c from Padrinazgo__c WHERE Valor_padrinazgo__c != null")
ahijado = padrino["records"][0]["Ahijado__r"]["Name"]
nombre = padrino["records"][0]["Padrino__r"]["Name"]
email = padrino["records"][0]["Padrino__r"]["Email"]
membershipStartDate = padrino["records"][0]["Padrino__r"]["npo02__MembershipJoinDate__c"]