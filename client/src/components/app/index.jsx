import React, { Component } from 'react';
import SignUp from '../sign-up';
import Header from '../header';
import styles from './styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      showSignup: true,
    }
  }

  renderSignup = () => {
    return this.state.showSignup ?
      <SignUp
        handleInputChange={this.updateInputField}
        handleSubmit={this.handleSignupSubmit}
        toggleSignup={this.toggleSignup}
      /> :
      null;
  }

  updateInputField = ({ type, value }) => { this.setState({ [`${type}`]: value }) }

  toggleSignup = () => { this.setState({ showSignup: !this.state.showSignup }) }

  handleSignupSubmit = () => {
    // validate
    console.log('submitting');
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
