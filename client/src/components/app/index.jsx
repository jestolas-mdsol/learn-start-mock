import React, { Component } from 'react';
import { Route } from "react-router-dom"

import Hero from '../hero';
import Stories from '../stories';
import SignUp from '../sign-up';
import Header from '../header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValid: false,
      email: '',
      password: '',
      showSignup: true,
      formSubmitted: false,
    }
  }

  renderSignup = () => {
    return this.state.showSignup ?
      <SignUp
        handleInputChange={this.updateInputField}
        handleSubmit={this.handleSignupSubmit}
        toggleSignup={this.toggleSignup}
        emailValid={this.state.emailValid}
        formSubmitted={this.state.formSubmitted}
        email={this.state.email}
        password={this.state.password}
      /> :
      null;
  }

  updateInputField = ({ type, value }) => {
    this.setState({
      [`${type}`]: value,
      formSubmitted: false,
    })
  }

  toggleSignup = () => { this.setState({ showSignup: !this.state.showSignup }) }

  validateEmail = () => {
    const emailRegex = /^\w+@\w+\.[a-zA-Z]{2,3}$/g

    return !!(this.state.email.match(emailRegex))
  }

  handleSignupSubmit = () => {
    this.setState({
      emailValid: this.validateEmail(),
      formSubmitted: true,
    }, () => {
      if (this.state.emailValid && this.state.password) {
        this.setState({ showSignup: false });
      }

      if (!this.state.emailValid) {
        this.setState({ email: '' });
      }

      if (!this.state.password.length) {
        this.setState({ password: '' });
      }
    })
  }

  renderStories =() => {
    console.log('whee')
    return null;
  }

  render() {
    return(
      <div>
        {this.renderSignup()}
        <Header toggleSignup={this.toggleSignup} />
        <Route exact path="/" component={Hero} />
        <Route path="/stories" component={Stories} />
      </div>
    )
  }
}

export default App;
