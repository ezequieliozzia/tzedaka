import os
import random
from datetime import date, datetime

from dateutil.relativedelta import relativedelta
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from simple_salesforce import Salesforce, format_soql

load_dotenv()

# WINDOWS: python -m flask --app index run --debug
# MAC: flask run

# sf = Salesforce( username        = os.getenv('FFG_USERNAME'),
#                  password        = os.getenv('FFG_PASSWORD'),
#                  instance        = os.getenv('FFG_INSTANCE'),
#                  consumer_key    = os.getenv('FFG_CONSUMER_KEY'),
#                  consumer_secret = os.getenv('FFG_CONSUMER_SECRET'))

# queryAhijados = sf.query("SELECT Name, Edad__c, Programa__c, PAG_Descripci_n__c, C_digo_del_beneficiario__c FROM Beneficiario__c")
# queryPadrinazgos = sf.query("SELECT Ahijado__c FROM Padrinazgo__c")

# activeUser = 0

app = Flask(__name__)

# CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
# @cross_origin()
def home():
    return "Home"

# @app.route("/contactInfo", methods=['POST', 'GET'])
# @cross_origin()
# def contactInfo():
#     if request.method == 'POST':
#         email = request.json['email']
#         error = None
#         data = []

#         if not email:
#             error = 'Email is required.'

#         if error is None:
#             try:
#                 query = sf.query("SELECT Padrino__r.Name, Padrino__r.Correo_para_comunicaciones__c, Ahijado__r.Id, Ahijado__r.Name, Ahijado__r.Programa__c FROM Padrinazgo__c WHERE Ahijado__r.Id != null and Padrino__r.Correo_para_comunicaciones__c != null and Padrino__r.Correo_para_comunicaciones__c = '" + email + "'")

#                 # beneficiario__c is the id from the beneficiario 
#                 query_stories = sf.query('SELECT Beneficiario__c, Historia_V_nculo__c from Historia__c')

#                 stories = {}
#                 for entry in range(0,query_stories['totalSize']):
#                     id = query_stories['records'][entry]['Beneficiario__c']
#                     url = query_stories['records'][entry]['Historia_V_nculo__c']
#                     if id in stories:
#                         stories[id].append(url)
#                     else:
#                         stories[id] = [url]

#                 dataDict = {
#                     'contacto': query['records'][0]['Padrino__r']['Name']
#                 }

#                 programas = []

#                 for entry in range(0,query['totalSize']):
#                     programas.append( query['records'][entry]['Ahijado__r']['Programa__c'] )

#                 dataList = []
                
#                 for entry in range(0,query['totalSize']):
#                     id_ahijado =  query['records'][entry]['Ahijado__r']['Id']
#                     story = None if id_ahijado not in stories else stories[id_ahijado][-1]

#                     ahijadosDict = {
#                         'ahijado':   query['records'][entry]['Ahijado__r']['Name'],
#                         'programa':   query['records'][entry]['Ahijado__r']['Programa__c'],
#                         'historia': story
#                     }
                    
#                     dataList.append(ahijadosDict)

#                 dataDict["programas"] = list(set(programas))    
#                 # Numero total de donaciones
#                 dataDict["ahijados"] = dataList
#                 data = dataDict
                
#             except Exception as e:
#                 print("Exception: ", e)
#                 data = {}

#         return jsonify(data)


# # Es necesario que se encuentren logueados para poder ver esto? Imagino que no
# @app.route("/beneficiaries", methods=['GET'])
# @cross_origin()
# def beneficiaries():
#     if request.method == 'GET':
#         # query = sf.query("SELECT Name, Edad__c, Programa__c, PAG_Descripci_n__c FROM Beneficiario__c WHERE C_digo_del_beneficiario__c NOT IN (SELECT Ahijado__c FROM Padrinazgo__c)")
#         program = request.args.get('program')
#         queryAhijados = sf.query(f"SELECT Name, Edad__c, Programa__c, PAG_Frase__c , G_nero__c , PAG_Descripci_n__c FROM Beneficiario__c WHERE Name != null AND Programa__c = '{program}'")
#         queryPadrinazgos = sf.query(f"SELECT Ahijado__r.Name, Ahijado__r.Programa__c,  SUM(Cobertura_padrinazgo__c) cobertura FROM Padrinazgo__c WHERE Ahijado__r.Name != null AND Ahijado__r.Programa__c = '{program}' GROUP BY Ahijado__r.Name, Ahijado__r.Programa__c HAVING SUM(Cobertura_padrinazgo__c) >= 100 ORDER BY Ahijado__r.Name ASC")

#         ahijados = []
#         padrinazgos = []
#         noApadrinados = []

#         for entry in range(0, queryAhijados['totalSize']):
            
#             desc =  queryAhijados['records'][entry]['PAG_Descripci_n__c']

#             data = { 
#                 "Nombre": queryAhijados['records'][entry]['Name'],
#                     "Edad": queryAhijados['records'][entry]['Edad__c'],
#                     "Programa": queryAhijados['records'][entry]['Programa__c'],
#                     "Descripcion": queryAhijados['records'][entry]['PAG_Descripci_n__c'],
#                     "Frase": queryAhijados['records'][entry]['PAG_Frase__c'],
#                     "Genero": queryAhijados['records'][entry]['G_nero__c']
#             }
#             if desc:
#                 ahijados.append(data)
            
#         for entry in range(0, queryPadrinazgos['totalSize']):
#             padrinazgos.append(queryPadrinazgos['records'][entry]['Name'])

#         for x in range(0, len(ahijados)):
#             ahijados[x]["Nombre"] not in padrinazgos and noApadrinados.append(ahijados[x])

#         children_shown = min(6, len(noApadrinados))
#         return jsonify({"ahijados": random.sample(noApadrinados, children_shown)})
    
# @app.route("/events", methods=['GET'])
# @cross_origin()
# def eventos():
#     eventos = []

#     queryEventos = sf.query("SELECT OwnerId, Name, LastModifiedById, Im_gen__c, Fecha__c, Descripci_n__c, CreatedById, Programa_del_evento__c FROM PAG_eventos__c")

#     for entry in range(0, queryEventos['totalSize']):
            
#         data = { "OwnerId": queryEventos['records'][entry]['OwnerId'],
#                     "Name": queryEventos['records'][entry]['Name'],
#                     "LastModifiedById": queryEventos['records'][entry]['LastModifiedById'],
#                     "Imagen": queryEventos['records'][entry]['Im_gen__c'],
#                     "Fecha": queryEventos['records'][entry]['Fecha__c'],
#                     "Descripcion": queryEventos['records'][entry]['Descripci_n__c'],
#                     "CreatedById": queryEventos['records'][entry]['CreatedById'],
#                     "Programa": queryEventos['records'][entry]['Programa_del_evento__c']
#         }

#         eventos.append(data)


#     return jsonify({"eventos": eventos})


# @app.route("/story", methods=['POST', 'GET'])
# @cross_origin()
# def story():
#     if request.method == 'POST':
#         name = request.json['name']
#         error = None
#         data = []

#         if not name:
#             error = 'Name is required.'

#         if error is None:
#             try:
#                 query = sf.query("SELECT Historia_V_nculo__c FROM Historia__c WHERE Beneficiario__r.Name = '" + name + "'")

#                 data = {
#                     "story": query['records'][0]["Historia_V_nculo__c"]
#                 }

#             except:
#                 data = {}

#         return jsonify(data)
    
# @app.route("/donations", methods=['POST', 'GET'])
# @cross_origin()
# def donations():
#     if request.method == 'POST':
#         email = request.json['email']
#         error = None
#         data_x = []
#         data_y = []

#         today = date.today()
#         beginning_date = today - relativedelta(years=3)

#         from_date = beginning_date.strftime("%Y-%m-%d")

#         if not email:
#             error = 'Name is required.'

#         if error is None:
#             try:
#                 # query = sf.query("SELECT Name, npe03__Amount__c,npsp__StartDate__c,npsp__EndDate__c, npe03__Date_Established__c, npsp__InstallmentFrequency__c, npe03__Installment_Period__c, npe03__Total_Paid_Installments__c, RecordTypeId, npe03__Paid_Amount__c FROM npe03__Recurring_Donation__c WHERE npe03__Contact__r.Email = '" + email + "'")
#                 query = sf.query(f"SELECT Amount, CloseDate from Opportunity where npe03__Recurring_Donation__r.RecordType.Name = 'Padrinazgos' and  StageName in ('Closed won','Cerrado ganada') and CloseDate >= {from_date} and npsp__Primary_Contact__r.Correo_para_comunicaciones__c = '{email}'")

#                 results = []

#                 for entry in range(0, len(query["records"])):
#                     data_y.append(query["records"][entry]["Amount"])
#                     data_x.append(query["records"][entry]["CloseDate"])
                
#             except:
#                 data = []


#         return jsonify({'data_x': data_x, 'data_y': data_y })


# @app.route('/create_lead', methods=['POST'])
# @cross_origin()
# def create_lead():
#     try:
#         # Extract data from the request

#         data = request.json

#         # Salesforce API request payload
#         payload = {
#             'FirstName': data.get('name'),
#             'LastName': data.get('surname'),
#             'Phone': data.get('phone'),
#             'MobilePhone': data.get('phone'),
#             'Company': data.get('name')+ data.get('surname'),
#             'Email': data.get('email'),
#             # 'Address': data.get('address'),
#             'npsp__CompanyPostalCode__c': data.get('zipcode'),
#             'npsp__CompanyState__c': data.get('state'),
#             'npsp__CompanyCountry__c': data.get('country')
#             # 'Company': data.get('company'),
#             # Add more fields as needed
#         }

#         # Create a Lead using simple-salesforce
#         sf.Lead.create(payload)

#         return jsonify({'success': True, 'message': 'Lead created successfully'})

#     except Exception as e:
#         return jsonify({'success': False, 'message': f'Error: {str(e)}'}), 500



# # Queries a implementar: 

# # dado un intervalo de tiempo 1 mes, 3 meses, 6 meses, 1 año 2, 3 etc.
# # retornar las donaciones que ocurrieron, junto con su timestamp 



# # Queries de prueba

# # contact = sf.query("SELECT Name, AccountId from Contact WHERE Name='Padrino 3'")
# # contact = sf.query( "SELECT Name FROM Contact WHERE Email != '' ")
# # account = sf.query("SELECT Name FROM Account WHERE Id='0016S00003SZdCZQA1'")
# # account = sf.query("SELECT Name FROM Account WHERE Email2__c !='' LIMIT 1")



# # Query para obtener cuenta a partir del contacto
# # account = sf.query("SELECT Name from Account WHERE Id in (SELECT AccountId FROM contact WHERE Name='Padrino 3')")
# # padrino = sf.query("SELECT Valor_padrinazgo__c from Padrinazgo__c WHERE Padrino__c in (SELECT Id FROM contact WHERE Name='Padrino 3')")
# # padrino = sf.query("SELECT Valor_padrinazgo__c from Padrinazgo__c WHERE Ahijado__c in (SELECT Id FROM Beneficiario__c WHERE Name='Iara Naomi De rosa')")

# sf.query("SELECT Padrino__r.Name, Donaci_n__r.npe03__Amount__c, Ahijado__r.Name FROM Padrinazgo__c WHERE Valor_padrinazgo__c != null")

# padrino = sf.query("SELECT Ahijado__r.Name, Padrino__r.Name, Padrino__r.Email, Padrino__r.npo02__MembershipJoinDate__c from Padrinazgo__c WHERE Valor_padrinazgo__c != null")
# ahijado = padrino["records"][0]["Ahijado__r"]["Name"]
# nombre = padrino["records"][0]["Padrino__r"]["Name"]
# email = padrino["records"][0]["Padrino__r"]["Email"]
# membershipStartDate = padrino["records"][0]["Padrino__r"]["npo02__MembershipJoinDate__c"]