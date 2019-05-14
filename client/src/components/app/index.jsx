import React, { Component } from 'react';
import SignUp from '../sign-up';
import Header from '../header';
import styles from './styles';

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

  render() {
    return(
      <div>
        {this.renderSignup()}
        <Header toggleSignup={this.toggleSignup} />
        <div className="hero">
          <h1>Stay hungry. Stay Foolish.</h1>
          <p>Learn from the hottest startups in the world</p>
          <button>Read Now</button>
        </div>
      </div>
    )
  }
}

export default App;
