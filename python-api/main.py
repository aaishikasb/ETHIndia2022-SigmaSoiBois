import os

from flask import Flask, redirect, render_template, request, url_for

from requests import get, post
import pandas as pd
import time

API_KEY = os.getenv("API_KEY")
HEADER = {"x-dune-api-key" : API_KEY}

# Example Query ID - 638435
QUERY_ID = "your_query_ID"

BASE_URL = "https://api.dune.com/api/v1/"


app = Flask(__name__)


def make_api_url(module, action, ID):
    """
    We shall use this function to generate a URL to call the API.
    """

    url = BASE_URL + module + "/" + ID + "/" + action

    return url


def execute_query_with_params(query_id, param_dict):
    """
    Takes in the query ID. And a dictionary containing parameter values.
    Calls the API to execute the query.
    Returns the execution ID of the instance which is executing the query.
    """

    url = make_api_url("query", "execute", query_id)
    response = post(url, headers=HEADER, json={"query_parameters" : param_dict})
    execution_id = response.json()['execution_id']

    return execution_id


def get_query_results(execution_id):
    """
    Takes in an execution ID.
    Fetches the results returned from the query using the API
    Returns the results response object
    """

    url = make_api_url("execution", "results", execution_id)
    response = get(url, headers=HEADER)

    return response


def fetch_data_from_chains(address):

    parameters = {"wallet_address" : address}
    execution_id = execute_query_with_params(QUERY_ID, parameters)
    time.sleep(10)
    response = get_query_results(execution_id)

    return response.json()['result']['rows']['sum']


@app.route("/", methods=("GET", "POST"))
def index():
    if request.method == "POST":
        address = request.form["address"]
        response = fetch_data_from_chains(address)
        return redirect(url_for("index", result=response))

    result = request.args.get("result")
    return render_template("index.html", result=result)