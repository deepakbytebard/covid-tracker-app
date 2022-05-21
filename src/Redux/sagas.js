import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_CONTINENT_DATA,
  GET_CONTINENT_SUCCESS,
  GET_COUNTRY_DATA,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_CONTINENT_SUCCESS,
  GET_COUNTRY_CONTINENT_DATA,
  GET_GLOBAL_SUCCESS,
  GET_GLOBAL_DATA,
  GET_WORLD_DATA,
  GET_WORLD_SUCCESS,
} from "./action";

// for country according to their name
async function countryFetch(payload) {
  const response = await fetch(
    `https://disease.sh/v3/covid-19/countries/${payload}?twoDaysAgo=yesterdays&strict=active`
    // `https://disease.sh/v3/covid-19/countries/india?twoDaysAgo=yesterdays&strict=active`
  );
  const data = await response.json();
  return data;
}

function* getCountryFetch(action) {
  try {
    const countries = yield call(countryFetch, action.payload);
    console.log(countries);
    yield put({
      type: GET_COUNTRY_SUCCESS,
      countries
    });
  } catch (err) {}
}

function* mySaga() {
  yield takeEvery(GET_COUNTRY_DATA, getCountryFetch);
}

// for country according to their continent

async function countryFetchAccodingToContinent() {
  const response = await fetch(
    `https://disease.sh/v3/covid-19/countries/?twoDaysAgo=yesterdays&strict=active`
  );
  const countryData = await response.json();
  console.log(countryData);

  return countryData;
}

function* getCountryFetchAccodingToContinent() {
  try {
    const countriesContinent = yield call(
      countryFetchAccodingToContinent
      //   action.payload
    );
    yield put({ type: GET_COUNTRY_CONTINENT_SUCCESS, countriesContinent });
  } catch (err) {}
}

export function* myCountryAccordingToContinentSaga(action) {
  console.log(myCountryAccordingToContinentSaga, "afdulvyfvjs hreiygshvd eyi");
  yield takeEvery(
    GET_COUNTRY_CONTINENT_DATA,
    getCountryFetchAccodingToContinent
  );
}

// for continent according to their name

async function continentFetch(payload) {
  const response = await fetch(
    `https://disease.sh/v3/covid-19/continents/${payload}?yesterday=true&strict=active`
  );
  const data = await response.json();
  console.log(data);
  return data;
}

function* getContinentFetch(action) {
  try {
    const continents = yield call(continentFetch, action.payload);
    yield put({ type: GET_CONTINENT_SUCCESS, continents });
  } catch (e) {}
}

export function* myContinentSaga(action) {
  yield takeEvery(GET_CONTINENT_DATA, getContinentFetch);
}

// for all the continent data in global
async function globalFetch(payload) {
  const response = await fetch(
    `https://disease.sh/v3/covid-19/continents?yesterday=true&strict=active`
  );
  const glob = await response.json();
  console.log(glob);
  return glob;
}

function* getGlobalFetch(action) {
  try {
    const global = yield call(globalFetch, action.payload);
    console.log("dsfjnbigfpndsi");
    yield put({ type: GET_GLOBAL_SUCCESS, global });
  } catch (e) {}
}

export function* myGlobalSaga(action) {
  yield takeEvery(GET_GLOBAL_DATA, getGlobalFetch);
}

// for world data
async function worldFetch(payload) {
  const response = await fetch(
    `https://disease.sh/v3/covid-19/all?yesterday=yesterday&allowNull=active`
  );
  const worldData = await response.json();
  console.log(worldData);
  return worldData;
}

function* getWorldFetch(action) {
  try {
    const world = yield call(worldFetch, action.payload);
    yield put({ type: GET_WORLD_SUCCESS, world });
  } catch (e) {}
}

export function* myWorldSaga(action) {
  yield takeEvery(GET_WORLD_DATA, getWorldFetch);
}

export default mySaga;
