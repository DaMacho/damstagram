import { connect } from "react-redux"
import Container from "components/App/container"
// the App is build up based on the Container & Presenter pattern.

const mapStateToProps = (state, ownProps) => {
  const { user } = state
  return {
    isLoggedIn: user.isLoggedIn
  }
}

export default connect(mapStateToProps)(Container)