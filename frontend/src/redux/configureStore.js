import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import users from "redux/modules/users";

const env = process.env.NODE_ENV

const middlewares = [thunk, ]

// only for development env
if(env === 'development'){
  const { logger } = require("redux-logger")
  middlewares.push(logger)
}

// manage reducers, deal with various reducers
const reducer = combineReducers({
  users
});



let store = initialState => createStore(reducer, applyMiddleware(...middlewares));

export default store();
