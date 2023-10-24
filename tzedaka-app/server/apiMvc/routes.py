from flask import Blueprint
from controller import index,contactInfoController,beneficiariesController,eventsController

blueprint = Blueprint('blueprint', __name__)

blueprint.route('/', methods=['GET'])(index)
blueprint.route('/contactInfo',methods=['POST'])(contactInfoController)
blueprint.route("/beneficiaries", methods=['GET'])(beneficiariesController)
blueprint.route('/events', methods=['GET'])(eventsController)