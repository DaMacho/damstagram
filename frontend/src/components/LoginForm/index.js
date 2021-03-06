import { connect } from "react-redux"
import Container from "components/LoginForm/container"
import { actionCreators as userActions } from "redux/modules/user"

const mapDispatchProps = (dispatch, ownProps) => {
    return {
        // basic form is ... dispatch1: () => { dispatch(actionCreator) }
        facebookLogin: (access_token) => {
            dispatch(userActions.facebookLogin(access_token))
        },
        usernameLogin: (email, password) => {
            dispatch(userActions.usernameLogin(email, password))
        }
    }
}

export default connect(null, mapDispatchProps)(Container);