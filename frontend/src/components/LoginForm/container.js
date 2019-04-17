import React, { Component } from "react";
import PropTypes from "prop-types"
import LoginForm from "components/LoginForm/presenter";

// const Container =props => <LoginForm {...props} />

class Container extends Component {
  state = {
    username: "",
    password: ""
  };
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    usernameLogin: PropTypes.func.isRequired,
  }
  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
        usernameValue={username}
        passwordValue={password}
      />
    );
  }
  _handleInputChange = event => {
    const { target: { value, name } } = event; //== const value OR name = event.target. value OR name
    this.setState({
      // [name] is from the -2 line, name
      [name]: value
    });
  };
  _handleSubmit = event => {
    const { usernameLogin } = this.props
    const { username, password } = this.state
    event.preventDefault();
    // redux action be followed
    usernameLogin(username, password)
  };
  _handleFacebookLogin = response => {
    console.log(response)
    // redux action be followed
    const { facebookLogin } = this.props
    facebookLogin(response.accessToken)
  }
}

export default Container;
