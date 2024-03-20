from db_manager import DBManager
from save_json import DataProcessor

if __name__ == "__main__":
    db_m = DBManager()
    data_p = DataProcessor(db_m)
    data_p.check_dir("/home/zahra/Desktop/Plot/z-library-clone/public/images")
