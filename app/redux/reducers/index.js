import { combineReducers } from "redux";
import card from "./card";
import limit from "./limit";

const rootReducer = combineReducers({
    card: card,
    limit: limit,
})

export default rootReducer;