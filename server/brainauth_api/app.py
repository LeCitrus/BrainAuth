from flask import Flask, request

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello, World!"


@app.route("/login", methods=["POST"])
def login():
    print(request.files.__dict__)
    if request.files and request.files["file"]:
        # process brain eeg data
        return {"success": request.files["file"].filename}, 200
    else:
        return {"error": "No file was found"}, 400
