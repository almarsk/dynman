from flask import Flask
from flask_cors import CORS
from flask.json import jsonify

from build_manual import build_manual
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def structure():
    with open("content/structure.json", "r") as s:
        return jsonify(build_manual(json.loads(s.read())))

if __name__ == '__main__':
    app.run(debug=True)
