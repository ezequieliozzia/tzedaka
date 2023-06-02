from flask import Flask
import os

# python -m flask --app main run

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Aguante el backend!</p>"
