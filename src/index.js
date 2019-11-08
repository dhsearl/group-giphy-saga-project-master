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
    yield takeEvery('GET_GIFS', getSaga)
    yield takeEvery('GET_FAVS', favoritesSaga)
    yield takeEvery('SET_FAVORITE_GIF',favoriteGifSaga)
}

function* getSaga(action) {
    const query = yield axios.post('/api/search', action.payload)
    yield put({type: 'SET_GIFS', payload: query.data.data })
}

function* favoriteGifSaga(action) {
    yield axios.post('/api/favorite',{url: action.payload});
    yield put({type:"GET_FAVS"})
}

function* favoritesSaga() {
    const query = yield axios.get('/api/favorite')
    yield put({type:"SET_FAVORITES", payload: query.data})
}

const gifsReducer = (state = [], action) => {
    if (action.type === 'SET_GIFS') {
        return action.payload
    }
    return state
}
const favoritesReducer = (state=[], action) =>{
    if (action.type === 'SET_FAVORITES'){
        console.log('favoritesReducer hit', action.payload);
        return action.payload
    }
    return state
}



const store = createStore(
    combineReducers({
        gifsReducer,
        favoritesReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));