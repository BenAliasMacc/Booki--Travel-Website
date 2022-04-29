import { ECONOMIC_FILTER, FAMILY_FILTER, PETS_FILTER, ROMANTIC_FILTER } from "./type"

type filtersAction = {
    type: string
}

const initialState = {
    economicFilter: false,
    familyFilter: false,
    romanticFilter: false,
    petsFilter: false,
    filter: ""
}

const reducerCallApi = (state = initialState, { type }: filtersAction ) => {    

    switch (type) {
        case ECONOMIC_FILTER:
            return {
                ...state,
                economicFilter: !state.economicFilter,
                filter: "economic"
            }
        case FAMILY_FILTER:
            return {
                ...state,
                familyFilter: !state.familyFilter,
                filter: "family"
            }        
        case ROMANTIC_FILTER:
            return {
                ...state,
                romanticFilter: !state.romanticFilter,
                filter: "romantic"
            }        
        case PETS_FILTER:
            return {
                ...state,
                petsFilter: !state.petsFilter,
                filter: "pets"
            }        
        default: return state
    }
}

export default reducerCallApi;