import { connect } from "react-redux"
import Container from "components/App/container"
// the App is build up based on the Container & Presenter pattern.

const mapStateToProps = (state, ownProps) => {
  const { user, router: { location } } = state
  return {
    isLoggedIn: user.isLoggedIn,
    pathname: location.pathname
  }
}

export default connect(mapStateToProps)(Container)