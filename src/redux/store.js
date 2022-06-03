import {combineReducers, legacy_createStore as createStore} from "redux";
import headerReducer from "./headerReducer";

let reducers = combineReducers({
    request: headerReducer,

});

let store = createStore(reducers);

window.store = store;

export default store;
