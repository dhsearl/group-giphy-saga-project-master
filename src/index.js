import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import App from './components/App/App';
import { takeEvery, put } from 'redux-saga/effects';
import axios from "axios";
import { combineReducers } from 'redux';

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {

}

const firstReducer = (state = {},action) => {
    return state
}

const store = createStore(
    combineReducers({firstReducer}),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));