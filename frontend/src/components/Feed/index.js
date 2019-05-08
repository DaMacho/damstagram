import { connect } from "react-redux"
import Container from "components/Feed/container"
import { actionCreators as photoActions } from "redux/modules/photos";

// Add all the action for:
const MapStateToProps = (state, ownProps) => {
  const { photos: { feed } } = state
  return {
    feed
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
        dispatch(photoActions.getFeed())
    }
  }
}


export default connect(MapStateToProps, mapDispatchToProps)(Container)