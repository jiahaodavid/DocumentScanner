from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import pytesseract

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "Index!"

@app.route("/scanner", methods=['POST'])
def hello():
    # Safe guarding
    if 'file' not in request.files:
        print("failed here")
        response = {"msg": "No file detected"}
        return jsonify(response), 400

    try:
        target = request.files['file']
        data = str(((pytesseract.image_to_string(Image.open(target)))))
        response = {"msg": data}
        return jsonify(response), 200
    except Exception as e:
        print(e)
        return {"msg": "Failed to process image. Try again later"}, 400

if __name__ == "__main__":
    app.run(debug=True)