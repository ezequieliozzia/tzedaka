import os
from simple_salesforce import Salesforce
from dotenv import load_dotenv

load_dotenv()

def salesforce_setup():


    sf = Salesforce( username        = os.getenv('FFG_USERNAME'),
                    password        = os.getenv('FFG_PASSWORD'),
                    instance        = os.getenv('FFG_INSTANCE'),
                    consumer_key    = os.getenv('FFG_CONSUMER_KEY'),
                    consumer_secret = os.getenv('FFG_CONSUMER_SECRET'))

    return sf