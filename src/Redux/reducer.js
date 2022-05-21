import {
  GET_CONTINENT_DATA,
  GET_COUNTRY_DATA,
  GET_CONTINENT_SUCCESS,
  GET_COUNTRY_SUCCESS,
  GET_GLOBAL_DATA,
  GET_GLOBAL_SUCCESS,
  GET_WORLD_DATA,
  GET_WORLD_SUCCESS,
  GET_COUNTRY_CONTINENT_DATA,
  GET_COUNTRY_CONTINENT_SUCCESS,
} from "./action";

const InitialState = {
  countryData: [],
  continentData: [],
  globalData: [],
  worldData: [],
  countryContinentData: [],
};

const myReducer = (state = InitialState, action) => {
  console.log(action, "action============");
  switch (action.type) {
    case GET_COUNTRY_DATA:
      return { ...state };
    case GET_COUNTRY_SUCCESS:
      return { ...state, countryData: action.countries };
    case GET_CONTINENT_DATA:
      return { ...state };
    case GET_CONTINENT_SUCCESS:
      return { ...state, continentData: action.continents };
    case GET_GLOBAL_SUCCESS:
      return { ...state, globalData: action.global };
    case GET_GLOBAL_DATA:
      return { ...state };
    case GET_WORLD_DATA:
      return { ...state };
    case GET_WORLD_SUCCESS:
      return { ...state, worldData: action.world };
    case GET_COUNTRY_CONTINENT_DATA:
      return { ...state };
    case GET_COUNTRY_CONTINENT_SUCCESS:
      return { ...state, countryContinentData: action.countriesContinent };
    default:
      return state;
  }
};

export default myReducer;
