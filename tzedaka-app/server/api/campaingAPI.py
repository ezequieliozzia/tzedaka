from flask import Flask, app, jsonify, request
from flask_cors import cross_origin
from index import sf

#Preguntas ¿Debemos conectarnos nuevamente o llamamos a la instancia de Saleforce de index.py? 

app = Flask(__name__)

@app.route("/v1/campaign/")
@cross_origin()
def home():
    return "Home"

@app.get('/getCampaignInfo/{campaignId}/{padrinoId}')
@cross_origin()
def getCampaignInfo():
    pass

@app.put("/campaignInfo/{campaignId}")
@cross_origin()
def updateCampaignInfo():
    pass

@app.post('/createCampaign')
@cross_origin()
def createCampaignInfo():
    try:
        # Extract data from the request

        data = request.json

        # Salesforce API request payload
        payload = {
            'campName': data.get('name'),
            'customStatus': [{
            'statusLabel': data.get('statusLabel'),
            'isDefault': data.get('isDefault'),
            'hasResponded': data.get('hasResponded')
            },{
            'statusLabel': data.get('statusLabel'),
            'isDefault': data.get('isDefault'),
            'hasResponded': data.get('hasResponded')
            }],
            'contactIds': [
                data.get('contactIds')
            ],
            'contentId': data.get('contentId')
        
        }

        # Create a Campaing using simple-salesforce
        sf.Campaing.create(payload)

        return jsonify({'success': True, 'message': 'Lead created successfully'})

    except Exception as e:
        return jsonify({'success': False, 'message': f'Error: {str(e)}'}), 500
