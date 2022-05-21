import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import myReducer from './Redux/reducer';
import { Provider } from 'react-redux';
import mySaga,{myContinentSaga, myCountryAccordingToContinentSaga, myGlobalSaga, myWorldSaga} from './Redux/sagas'
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'main-root',
  storage,
}

const rootReducer = combineReducers({myReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
console.log('initial stage ', store.getState())

const Persistor = persistStore(store)

sagaMiddleware.run(mySaga)
sagaMiddleware.run(myContinentSaga);
sagaMiddleware.run(myGlobalSaga);
sagaMiddleware.run(myWorldSaga)
sagaMiddleware.run(myCountryAccordingToContinentSaga)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading = {null} persistor = {Persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
