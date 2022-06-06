import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import headerReducer from "./headerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

let reducers = combineReducers({
    request: headerReducer,
    app: appReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
