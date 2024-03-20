import os
import json

class DataProcessor:
    def __init__(self, db_manager):
        self.db_manager = db_manager

    def check_dir(self, dir_):
        for subdir, dirs, files in os.walk(dir_):
            for file in files:
                if file.endswith('.json'):
                    file_path = os.path.join(subdir, file)
                    # Construct the expected image file path
                    img_path = os.path.splitext(file_path)[0] + '.jpg'
                    # Check if the image file exists
                    if os.path.exists(img_path):
                        img_path = img_path.replace("/home/zahra/Desktop/Plot/z-library-clone/public", "")
                        img_path_to_use = img_path
                    else:
                        img_path_to_use = None

                    with open(file_path, "r") as f:
                        data = json.load(f)
                        categories = data.get("Categories", "").split(" - ")
                        if len(categories) == 2:
                            data["category"], data["subCategory"] = categories
                        else:
                            data["category"] = categories[0] if categories else None
                            data["subCategory"] = None
                        # Add the image path to the data
                        data['img_path'] = img_path_to_use
                        self.db_manager.insert_img(data)

