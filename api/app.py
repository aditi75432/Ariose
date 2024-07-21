from flask import Flask, request,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# ans=get_case_description("murder")
# print(ans)
from ml import model
@app.route("/", methods=["POST"])
def main():
    s=request.json["customerTransactionID"]
    g=model(int(s))
    return jsonify(g)


if __name__ == "__main__":
    app.run(debug=True)


# pip install -r requirements.txt