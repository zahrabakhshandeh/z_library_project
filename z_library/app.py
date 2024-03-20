from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['z_library3']
images_collection = db.images

@app.route('/api/images', methods=['GET'])
def get_images():
    # Check if a category query parameter is provided
    category_name = request.args.get('category', None)
    
    query = {}
    # If category_name is provided, update the query to filter by category
    if category_name:
        query['category'] = category_name
    
    images = []
    for image in images_collection.find(query):
        image['_id'] = str(image['_id'])
        print(200*"_0", image['img_path'])
        try:
            image['url'] = request.host_url.rstrip('/') + '/static/' + image['img_path']
            print("okaaaayyyyyyy")
        except:
            pass
        images.append(image)
    return jsonify(images)

@app.route('/api/images/<string:image_id>', methods=['GET'])
def get_image(image_id):
    image = images_collection.find_one({'_id': ObjectId(image_id)})
    if image:
        image['_id'] = str(image['_id'])
        return jsonify(image)
    else:
        return jsonify({'error': 'Image not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)

