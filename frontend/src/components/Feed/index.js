import { connect } from "react-redux"
import Container from "components/Feed/container"
import { actionCreators as phtoActions } from "redux/modules/photos";

// Add all the action for:
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
        dispatch(phtoActions.getFeed())
    }
  }
}


export default connect(null, mapDispatchToProps)(Container)