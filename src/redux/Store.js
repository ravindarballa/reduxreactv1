import { combineReducers, createStore, applyMiddleware } from "redux";
import laptopReducer from "./reducers/laptopReducer";
import mobileReducer from "./reducers/mobileReducer";
import tabletReducer from "./reducers/tabletReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import logger from "redux-logger"

const rootReducer=combineReducers({
    laptop:laptopReducer,
    mobile:mobileReducer,
    tablet:tabletReducer,
    dataUser:userReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store; 