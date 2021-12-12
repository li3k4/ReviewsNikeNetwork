import {combineReducers, createStore} from "redux";
import reviewReducer from "./reviewReducer";
import messengerReducer from "./messengerReducer";
import headerReducer from "./headerReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    reviewPage: reviewReducer,
    messengerPage: messengerReducer,
    sidebar: headerReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);

export default store;