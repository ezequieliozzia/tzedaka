from service import events,beneficiaries,contactInfo

def index():
    return {
        "status" : "OK"
    }

def contactInfoController():

   return contactInfo()

def beneficiariesController():

   return beneficiaries()

def eventsController():

   return events()

