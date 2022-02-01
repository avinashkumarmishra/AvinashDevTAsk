import * as types from "../types";

export function setCardLimit(amount) {
    return {
        type: types.SET_CARD_LIMIT,
        payload: amount,
    }
}