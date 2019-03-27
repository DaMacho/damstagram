import React, { Component } from "react";
import SignupForm from "components/SignupForm/presenter";

// const Container =props => <SignupForm {...props} />

class Container extends Component {
  state = {
    email: "",
    fullName: "",
    username: "",
    password: ""
  };
  render() {
    const { email, fullName, username, password } = this.state;
    return (
      <SignupForm 
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
        emailValue={email}
        fullNameValue={fullName}
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
