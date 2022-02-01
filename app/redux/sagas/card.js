import {call, put, takeLatest} from 'redux-saga/effects';
import * as types from '../types';

const API_URL = "https://my-json-server.typicode.com/adwardstark/demo/card-details";

function fetchCardDetailsFromAPI() {
    return fetch(API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(resp => resp.json())
    .catch((err) => {throw err})
}

function* fetchCardDetails() {
    try {
        const details = yield call(fetchCardDetailsFromAPI);
        yield put({ type: types.GET_CARD_DETAILS_SUCCESS, card: details})
    } catch(e) {
        yield put({ type: types.GET_CARD_DETAILS_FAILED, message: e.message})
    }
}

export default function* cardSaga() {
    yield takeLatest(types.GET_CARD_DETAILS_REQUESTED, fetchCardDetails);
}