import * as types from '../types';

const initialState = {
    card: null,
    loading: false,
    error: null,
}

export default function getCardDetails(state = initialState, action) {
    switch(action.type) {
        case types.GET_CARD_DETAILS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case types.GET_CARD_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                card: action.card,
            }
        case types.GET_CARD_DETAILS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:
            return state;
    }
}