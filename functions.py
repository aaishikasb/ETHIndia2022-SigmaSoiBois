
from urlgen import make_api_url
from requests import get, post 
from credentials import keys
from credentials import header

def execute_query(query_id):
    """
    Takes in the query ID.
    Calls the API to execute the query.
    Returns the execution ID of the instance which is executing the query.
    """

    url = make_api_url("query", "execute", query_id)
    response = post(url, headers=header())
    execution_id = response.json()['execution_id']
    print("Unique Execution number of the Query:")
    return execution_id


def get_query_status(execution_id):
    """
    Takes in an execution ID.
    Fetches the status of query execution using the API
    Returns the status response object
    """
    
    url = make_api_url("execution", "status", execution_id)
    response = get(url, headers=header())
    print("Status of Execution:")
    return response


def get_query_results(execution_id):
    """
    Takes in an execution ID.
    Fetches the results returned from the query using the API
    Returns the results response object
    """

    url = make_api_url("execution", "results", execution_id)
    response = get(url, headers=header())
    print("Loading Query Results...")
    return response


def cancel_query_execution(execution_id):
    """
    Takes in an execution ID.
    Cancels the ongoing execution of the query.
    Returns the response object.
    """

    url = make_api_url("execution", "cancel", execution_id)
    response = get(url, headers=header())
    print("Cancelling execution...")
    return response
