import os

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from simple_salesforce import Salesforce, format_soql

load_dotenv()

# WINDOWS: python -m flask --app main run --debug
# MAC: flask run

sf = Salesforce( username        = os.getenv('FFG_USERNAME'),
                 password        = os.getenv('FFG_PASSWORD'),
                 instance        = os.getenv('FFG_INSTANCE'),
                 consumer_key    = os.getenv('FFG_CONSUMER_KEY'),
                 consumer_secret = os.getenv('FFG_CONSUMER_SECRET'))

queryAhijados = sf.query("SELECT Name, Edad__c, Programa__c, PAG_Descripci_n__c, C_digo_del_beneficiario__c FROM Beneficiario__c")
queryPadrinazgos = sf.query("SELECT Ahijado__c FROM Padrinazgo__c")

activeUser = 0

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "https://tzedaka-neon.vercel.app"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def home():
    return "Home"

@app.route("/contactInfo", methods=['POST', 'GET'])
@cross_origin()
def contactInfo():
    if request.method == 'POST':
        email = request.json['email']
        error = None
        data = []

        if not email:
            error = 'Email is required.'

        if error is None:
            try:
                query = sf.query("SELECT Padrino__r.Name, Padrino__r.Email, Padrino__r.npo02__MembershipJoinDate__c ,Donaci_n__r.npe03__Amount__c, Ahijado__r.Name, Ahijado__r.Programa__c, Ahijado__r.ltima_entrevista__c FROM Padrinazgo__c WHERE Padrino__r.Email = '" + email + "'")
                
                dataDict = {
                    'contacto': query['records'][0]['Padrino__r']['Name'], 
                    # fechaMembresia no anda
                    'fechaMembresia': query['records'][0]['Padrino__r']['npo02__MembershipJoinDate__c']
                }


                donaciones = []
                programas = []

                for entry in range(0,query['totalSize']):
                    donaciones.append( query['records'][entry]['Donaci_n__r']['npe03__Amount__c'] )
                    programas.append( query['records'][entry]['Ahijado__r']['Programa__c'] )

                dataList = []
                
                for entry in range(0,query['totalSize']):
                    ahijadosDict = {
                        'ahijado':   query['records'][entry]['Ahijado__r']['Name'],
                        'donacion': query['records'][entry]['Donaci_n__r']['npe03__Amount__c'],
                        'programa':   query['records'][entry]['Ahijado__r']['Programa__c'],
                        'entrevista': query['records'][entry]['Ahijado__r']['ltima_entrevista__c']
                    }
                    
                    dataList.append(ahijadosDict)

                dataDict["programas"] = list(set(programas))    
                # Numero total de donaciones
                dataDict["donado"] = sum(donaciones)
                dataDict["ahijados"] = dataList
                data = dataDict
                
            except:
                data = {}

        return jsonify(data)


# Es necesario que se encuentren logueados para poder ver esto? Imagino que no
@app.route("/beneficiaries", methods=['POST', 'GET'])
@cross_origin()
def beneficiaries():
    if request.method == 'GET':
        # query = sf.query("SELECT Name, Edad__c, Programa__c, PAG_Descripci_n__c FROM Beneficiario__c WHERE C_digo_del_beneficiario__c NOT IN (SELECT Ahijado__c FROM Padrinazgo__c)")
        queryAhijados = sf.query("SELECT Name, Edad__c, Programa__c, PAG_Descripci_n__c FROM Beneficiario__c")
        queryPadrinazgos = sf.query("SELECT Ahijado__r.Name FROM Padrinazgo__c")

        ahijados = []
        padrinazgos = []
        noApadrinados = []

        for entry in range(0, queryAhijados['totalSize']):
            
            data = { "Nombre": queryAhijados['records'][entry]['Name'],
                     "Edad": queryAhijados['records'][entry]['Edad__c'],
                     "Programa": queryAhijados['records'][entry]['Programa__c'],
                     "Descripcion": queryAhijados['records'][entry]['PAG_Descripci_n__c']
            }

            ahijados.append(data)
            
        for entry in range(0, queryPadrinazgos['totalSize']):
            # Si el padrinazgo no tiene ahijado rompe todo
            if ( queryPadrinazgos['records'][entry]['Ahijado__r'] != None ):
                padrinazgos.append( queryPadrinazgos['records'][entry]['Ahijado__r']['Name'] )

        for x in range(0, len(ahijados)):
            ahijados[x]["Nombre"] not in padrinazgos and noApadrinados.append(ahijados[x])

        return jsonify({"ahijados": noApadrinados})
    
@app.route("/events", methods=['GET'])
@cross_origin()
def eventos():
    eventos = []

    queryEventos = sf.query("SELECT OwnerId, Name, LastModifiedById, Im_gen__c, Fecha__c, Descripci_n__c, CreatedById FROM PAG_eventos__c")

    for entry in range(0, queryEventos['totalSize']):
            
        data = { "OwnerId": queryEventos['records'][entry]['OwnerId'],
                    "Name": queryEventos['records'][entry]['Name'],
                    "LastModifiedById": queryEventos['records'][entry]['LastModifiedById'],
                    "Imagen": queryEventos['records'][entry]['Im_gen__c'],
                    "Fecha": queryEventos['records'][entry]['Fecha__c'],
                    "Descripcion": queryEventos['records'][entry]['Descripci_n__c'],
                    "CreatedById": queryEventos['records'][entry]['CreatedById'],
        }

        eventos.append(data)


    return jsonify({"eventos": eventos})




    

# Queries a implementar: 

# dado un intervalo de tiempo 1 mes, 3 meses, 6 meses, 1 año 2, 3 etc.
# retornar las donaciones que ocurrieron, junto con su timestamp 



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