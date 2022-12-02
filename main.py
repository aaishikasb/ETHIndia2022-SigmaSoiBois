from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/functions.py/{query_id}")
def execute_query(query_id: int):
    return {"execution_id": execution_id}

@app.get("/functions.py/{execution_id}")
def get_query_status(execution_id: int):
    return {"response": execution_id}

@app.get("/functions.py/{execution_id}")
def get_query_results(execution_id: int):
    return {"response": item_id}

@app.get("/functions.py/{execution_id}")
def cancel_query_execution(execution_id: int):
    return {"response": execution_id}