import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { connectRouter, routerMiddleware } from "connected-react-router"
import createHistory from "history/createBrowserHistory"
import { composeWithDevTools } from "redux-devtools-extension"
import users from "redux/modules/users";
import Reactotron from "ReactotronConfig"

const env = process.env.NODE_ENV

const history = createHistory()

const middlewares = [thunk, routerMiddleware(history)]

// only for development env
if(env === 'development'){
  const { logger } = require("redux-logger")
  middlewares.push(logger)
}

// manage reducers, deal with various reducers
const reducer = combineReducers({
  users,
  router: connectRouter(history),
});

let store

if(env === "development"){
  store = initialState => 
    Reactotron.createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => 
    createStore(reducer, applyMiddleware(...middlewares));
}

export { history }

export default store();
