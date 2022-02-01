import * as types from "../types";

export function getCardDetails(card) {
    return {
        type: types.GET_CARD_DETAILS_REQUESTED,
        payload: card,
    }
}