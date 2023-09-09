import os
from supabase import create_client, Client

class DBConnect:
    def __init__(self):
        self.url: str = os.getenv("url")
        self.key: str = os.getenv("key")
    def get_conn(self):
        supabase: Client = create_client(self.url, self.key)
        return supabase
    def query(self, supabase, table_name):
        response = supabase.table(table_name).select("*").execute()
        if len(response.data) != 0:
            return response