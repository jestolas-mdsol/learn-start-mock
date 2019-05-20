import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
// import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Hero from '../hero';
import Stories from '../stories';
import SignUp from '../sign-up';
import Header from '../header';

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValid: false,
      name: '',
      email: '',
      password: '',
      signedIn: false,
      formSubmitted: false,
    }
  }

  renderSignup = () => {
    return !this.state.signedIn ?
      <SignUp
        handleInputChange={this.updateInputField}
        handleSubmit={this.handleSignupSubmit}
        toggleSignup={this.toggleSignup}
        emailValid={this.state.emailValid}
        formSubmitted={this.state.formSubmitted}
        name={this.state.name}
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

  toggleSignup = () => {
    if (this.state.signedIn) {
      this.setState({
        name: '',
        email: '',
        password: '',
        formSubmitted: false,
      })
    }

    this.setState({ signedIn: !this.state.signedIn })
  }

  validateEmail = () => {
    const emailRegex = /^\w+@\w+\.[a-zA-Z]{2,3}$/g

    return !!(this.state.email.match(emailRegex))
  }

  handleSignupSubmit = () => {
    this.setState({
      emailValid: this.validateEmail(),
      formSubmitted: true,
    }, () => {
      if (this.state.name.length && this.state.emailValid && this.state.password.length) {
        this.setState({ signedIn: true }, () => { history.push('/stories') });
      }

      if (!this.state.emailValid) {
        this.setState({ email: '' });
      }
    })
  }

  render() {
    return(
      <Router history={history}>
        <div>
          {this.renderSignup()}
          <Header
            toggleSignup={this.toggleSignup}
            signedIn={this.state.signedIn}
            name={this.state.name}
          />
          <Route exact path="/" component={Hero} />
          <Route path="/stories" component={Stories} />
        </div>
      </Router>
    )
  }
}

export default App;
