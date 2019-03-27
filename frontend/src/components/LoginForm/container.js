import React, { Component } from "react";
import LoginForm from "components/LoginForm/presenter";

// const Container =props => <LoginForm {...props} />

class Container extends Component {
  state = {
    username: "",
    password: ""
  };
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
    event.preventDefault();
    console.log(this.state)
    // redux action be followed

  };
  _handleFacebookLogin = response => {
    console.log(response)
    // redux action be followed
    
  }
}

export default Container;
