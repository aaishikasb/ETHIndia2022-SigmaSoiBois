from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("analytics/{query_id}")
def execute_query(query_id: int):
    return {"execution_id": execution_id}

@app.get("analytics/{response}")
def get_query_status(execution_id: any):
    return {"response": execution_id}

@app.get("analytics/{response}")
def get_query_results(execution_id: any):
    return {"response": item_id}

@app.get("/{response}")
def cancel_query_execution(execution_id: any):
    return {"response": execution_id}