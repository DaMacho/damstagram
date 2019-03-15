// Presenter component takes the no logic and only UI the showing, 
// data comes from props and all about props, such as images etc...
import React from "react";
import PropTypes from "prop-types"
import { Route, Switch } from "react-router-dom"
import "components/App/styles.module.scss";
import Footer from "components/Footer";
import Auth from "components/Auth"

// Making new stateless component, return array of component
const App = props => [
  // Nav,
  // Routes,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  // Footer,
  <Footer key={3} />
]

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => "feed"} />
    <Route exact path="/explore" render={() => "explore"} />
  </Switch>
)

const PublicRoutes = props =>(
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/forgot" render={() => "password"} />
  </Switch>
)


export default App;


// An Example
// class App extends Component {
//   render() {
//     return (
//       <div className={styles.App}>
//         <Switch>
//           <Route exact path="/" render={() => "hello!"} />
//           <Route path="/login" render={() => "login!"} />
//         </Switch>
//         <Footer />
//       </div>
//     );
//   }
// }