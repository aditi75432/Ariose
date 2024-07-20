import requests

@app.route('/upload', methods=['POST'])
def upload_to_ipfs():
    file = request.files['file']
    files = {'file': (file.filename, file.stream, file.mimetype)}
    response = requests.post('http://127.0.0.1:5001/api/v0/add', files=files)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": response.text}), response.status_code