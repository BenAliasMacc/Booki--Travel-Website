import { CALL_API_SUCCESS, CALL_API_FAILED, CALL_API_LOAD } from "./type";

type callApiAction = {
    type: string
    payload: {
        _id: number
        media: string
        title: string
        price: number
    }
}

const initialState = {
    accomodations: []
}

const reducerCallApi = (state = initialState, {type, payload}: callApiAction ) => {    

    switch (type) {
        case CALL_API_SUCCESS:
            return {
                ...state,
                accomodations: payload
            }
        case CALL_API_FAILED:
            return {
                ...state
            }        
        case CALL_API_LOAD:
            return {
                ...state
            }        
        default: return state
    }
}

export default reducerCallApi;