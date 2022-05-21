export const GET_COUNTRY_DATA = "GET_COUNTRY_DATA"
export const GET_COUNTRY_SUCCESS = "GET_COUNTRY_SUCCESS"

export const GET_CONTINENT_DATA = "GET_CONTINENT_DATA"
export const GET_CONTINENT_SUCCESS = "GET_CONTINENT_SUCCESS"

export const GET_GLOBAL_DATA = "GET_GLOBAL_DATA"
export const GET_GLOBAL_SUCCESS = "GET_GLOBAL_SUCCESS"

export const GET_WORLD_DATA = "GET_WORLD_DATA"
export const GET_WORLD_SUCCESS = "GET_WORLD_SUCCESS"


export const GET_COUNTRY_CONTINENT_DATA = "GET_COUNTRY_CONTINENT_DATA"
export const GET_COUNTRY_CONTINENT_SUCCESS = "GET_COUNTRY_CONTINENT_SUCCESS"




export const getCountryData = (payload) =>{
    console.log(payload, "payloaddddddd")
    return {
        type: GET_COUNTRY_DATA,
        payload:payload
    }
}

export const getContinentsData = (payload) =>{
    return {
        type: GET_CONTINENT_DATA,
        payload:payload
    }
}

export const getGlobalData = (payload) =>{
    return {
        type: GET_GLOBAL_DATA,
        payload:payload
    }
}

export const getWorldData = (payload) =>{
    return {
        type: GET_WORLD_DATA,
        payload:payload
    }
}

export const getCountryDataAccordingToContinent = ()=>{
    return {
        type: GET_COUNTRY_CONTINENT_DATA
    }
}