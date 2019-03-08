import { createStore, combineReducers } from "redux";
import users from "./modules/users";

// manage reducers, deal with various reducers
const reducer = combineReducers({
  users
});

let store = initialState => createStore(reducer);

export default store();
