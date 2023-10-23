from flask import Flask
from flask_cors import CORS
from routes import blueprint

activeUser = 0

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "https://tzedaka-neon.vercel.app"}})
app.config['CORS_HEADERS'] = 'Content-Type'

app.register_blueprint(blueprint, url_prefix='/')


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

#sf.query("SELECT Padrino__r.Name, Donaci_n__r.npe03__Amount__c, Ahijado__r.Name FROM Padrinazgo__c WHERE Valor_padrinazgo__c != null")

#padrino = sf.query("SELECT Ahijado__r.Name, Padrino__r.Name, Padrino__r.Email, Padrino__r.npo02__MembershipJoinDate__c from Padrinazgo__c WHERE Valor_padrinazgo__c != null")
#ahijado = padrino["records"][0]["Ahijado__r"]["Name"]
#nombre = padrino["records"][0]["Padrino__r"]["Name"]
#email = padrino["records"][0]["Padrino__r"]["Email"]
#membershipStartDate = padrino["records"][0]["Padrino__r"]["npo02__MembershipJoinDate__c"]