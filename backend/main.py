from flask import Flask
from app.routes.classification_routes import classification_bp
from flask_cors import CORS

# import logging

# logging.basicConfig(
#     level=logging.DEBUG,
#     format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
#     datefmt="%Y-%m-%d %H:%M:%S"
# )
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

app.register_blueprint(classification_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
