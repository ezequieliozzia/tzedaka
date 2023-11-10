from flask import jsonify,request
from config import salesforce_setup

sf = salesforce_setup()

def contactInfo():
    
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
    
def beneficiaries():
    
    queryAhijados = sf.query("SELECT Name, Edad__c, Programa__c, PAG_Descripci_n__c FROM Beneficiario__c")
    queryPadrinazgos = sf.query("SELECT Ahijado__r.Name, Cobertura_padrinazgo__c FROM Padrinazgo__c GROUP BY Ahijado__r.Name")

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
        if ( queryPadrinazgos['records'][entry]['Ahijado__r'] != None and queryPadrinazgos['records'][entry]['Cobertura_padrinazgo__c'] > 0.95 ):
            padrinazgos.append( queryPadrinazgos['records'][entry]['Ahijado__r']['Name'] )

    for x in range(0, len(ahijados)):
        ahijados[x]["Nombre"] not in padrinazgos and noApadrinados.append(ahijados[x])

    return jsonify({"ahijados": noApadrinados})   

def events():
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
