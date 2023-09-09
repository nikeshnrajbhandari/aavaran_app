from flask import Flask
from flask import request
from database.db_connect import DBConnect
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)



@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/product', methods=['GET'])
def product():
    supabase = DBConnect()
    conn = supabase.get_conn()
    response = supabase.query(conn, 'Product')
    return response.data