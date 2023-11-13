import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "../redux/authreducer/reducer";
import { reducer as calculateReducer } from "../redux/calculateReducer/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  authReducer,
  calculateReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
