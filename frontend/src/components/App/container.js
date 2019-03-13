// Container component takes the Logic, 
// the state and its change, loading the redux action, dispatch action, 
// such as API Requests, errors etc...
import React from "react"
import App from "components/App/presenter"

const Container = props => <App {...props} />

export default Container