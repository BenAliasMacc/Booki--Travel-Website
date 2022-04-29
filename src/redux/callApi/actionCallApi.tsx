import { CALL_API_SUCCESS, CALL_API_FAILED, CALL_API_LOAD } from "./type";
// const axios = require('axios').default;

type dataParameters = [{}]

export const callApiSuccess = (data: dataParameters) => {
    
    return {
        type: CALL_API_SUCCESS,
        payload: data
    }
}
export const callApiFailed = (error: string) => {
    return {
        type: CALL_API_FAILED,
        payload: error
    }
}
export const callApiLoad = () => {
    return {
        type: CALL_API_LOAD
    }
}

export const callApi = () => {

    return (dispatch: any) => {
        fetch("http://localhost:4000/accomodations")
        .then((response ) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then(data => {
            dispatch(callApiSuccess(data))
        })
        .catch(error => dispatch(callApiFailed(error)))
    }
}