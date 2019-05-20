import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import Hero from '../hero';
import Stories from '../stories';
import SignUp from '../sign-up';
import Header from '../header';
import { latestStories, editorsPicks, buildStories } from './config.js'

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
      showSignup: true,
      formSubmitted: false,
      latestStories: [],
      editorsPicks: [],
    }
  }

  componentDidMount() {
    this.updateStories({ type: 'latest', stories: buildStories(latestStories) });
    this.updateStories({ type: 'editors', stories: buildStories(editorsPicks) });
  }

  renderSignup = () => {
    return this.state.showSignup ?
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

  logout = () => {
    this.setState({
      signedIn: false,
      name: '',
      email: '',
      password: '',
      formSubmitted: false,
      showSignup: true,
    }, () => { this.toggleSignup() });
  }

  toggleSignup = () => {
    this.setState({ showSignup: !this.state.showSignup })
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
        this.setState({
          signedIn: true,
          showSignup: false,
        }, () => { history.push('/stories') });
      }

      if (!this.state.emailValid) {
        this.setState({ email: '' });
      }
    })
  }

  updateStories = ({ type, stories }) => {
    if (type === 'latest') {
      this.setState({ latestStories: stories });
    } else if (type === 'editors') {
      this.setState({ editorsPicks: stories });
    } else {
      return;
    }
  }

  render() {
    return(
      <Router history={history}>
        <div>
          {this.renderSignup()}
          <Header
            logout={this.logout}
            toggleSignup={this.toggleSignup}
            signedIn={this.state.signedIn}
            name={this.state.name}
          />
          <Route exact path="/" component={Hero} />
          <Route
            path="/stories"
            component={
              (props) => <Stories
                {...props}
                latestStories={this.state.latestStories}
                editorsPicks={this.state.editorsPicks}
                signedIn={this.state.signedIn}
              />}
          />
        </div>
      </Router>
    )
  }
}

export default App;
