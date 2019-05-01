import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { connectRouter, routerMiddleware } from "connected-react-router"
import createHistory from "history/createBrowserHistory"
import { composeWithDevTools } from "redux-devtools-extension"
import { i18nState } from "redux-i18n"   // for language management
import user from "redux/modules/user"
import photos from "redux/modules/photos"
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
  user,
  photos,
  router: connectRouter(history),
  i18nState, 
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
