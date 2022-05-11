import { ECONOMIC_FILTER, FAMILY_FILTER, PETS_FILTER, ROMANTIC_FILTER } from "./type"


export const economicFilter = () => {
    
    return {
        type: ECONOMIC_FILTER
    }
}
export const familyFilter = () => {
    
    return {
        type: FAMILY_FILTER
    }
}
export const romanticFilter = () => {
    
    return {
        type: ROMANTIC_FILTER
    }
}
export const petsFilter = () => {
    
    return {
        type: PETS_FILTER
    }
}