import * as types from '../types';

const initialState = {
    amount: 0,
}

export default function setCardLimit(state = initialState, action) {
    switch(action.type) {
        case types.SET_CARD_LIMIT:
            return {
                ...state,
                amount: action.payload,
            }
        default:
            return state;
    }
}