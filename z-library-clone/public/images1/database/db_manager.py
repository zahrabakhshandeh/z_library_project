from pymongo import MongoClient
import configparser

class DBManager:
    def __init__(self):
        self.client = MongoClient("mongodb://localhost:27017")
        self.db = self.client["z_library3"]
        self.collection = self.db["images"]

    def insert_img(self, data):
        self.collection.insert_one(data)        
