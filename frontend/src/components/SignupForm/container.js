import React, { Component } from "react";
import PropTypes from "prop-types"
import SignupForm from "components/SignupForm/presenter";

// const Container =props => <SignupForm {...props} />

class Container extends Component {
  state = {
    email: "",
    name: "",
    username: "",
    password: ""
  };
  static propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired,
  }
  render() {
    const { email, name, username, password } = this.state;
    return (
      <SignupForm 
        emailValue={email}
        nameValue={name}
        usernameValue={username}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
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
    const { username, password, email, name } = this.state
    const { createAccount } = this.props
    event.preventDefault();
    // redux action be followed
    createAccount(username, password, email, name)
  };
  _handleFacebookLogin = response => {
    console.log(response)
    // redux action be followed
    const { facebookLogin } = this.props
    facebookLogin(response.accessToken)
  }
}

export default Container;
