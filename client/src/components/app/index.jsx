import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import Hero from '../hero';
import Stories from '../stories';
import SignUp from '../sign-up';
import Header from '../header';
import AddStory from '../add-story';
import { latestStories, editorsPicks, buildStories } from './config.js'

const history = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValid: false,
      // name: '',
      name: 'Aragorn Elessar',
      email: '',
      password: '',
      // signedIn: false,
      signedIn: true,
      // showSignup: true,
      showSignup: false,
      formSubmitted: false,
      latestStories: [],
      editorsPicks: [],
      storyTitle: '',
      storyContent: '',
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

  toggleAddStory = () => { this.setState({ showAddStory: !this.state.showAddStory }) }

  createStory = ({ title, content }) => {
    const stories = this.state.latestStories;
    const newStory = {
      title,
      content,
      author: this.state.name,
    };
    stories.unshift(newStory);

    this.setState({
      latestStories: stories,
      storyTitle: '',
      storyContent: '',
    })
  }

  renderAddStory = () => {
    return this.state.showAddStory ?
      <AddStory
        storyTitle={this.state.storyTitle}
        storyContent={this.state.storyContent}
        handleInputChange={this.updateInputField}
        createStory={this.createStory}
        toggleAddStory={this.toggleAddStory}
      /> :
      null;
  }

  deleteStory = ({ storyType, idx }) => {
    const stories = this.state[`${storyType}`];

    stories.splice(idx, 1);

    this.setState({ [`${storyType}`]: stories });
  }

  featureStory = ({ idx }) => {
    const latestStories = this.state.latestStories;
    const editorsPicks = this.state.editorsPicks;
    const featuredStory = latestStories.splice(idx, 1)[0];

    editorsPicks.unshift(featuredStory);

    // debugger

    this.setState({ latestStories, editorsPicks });

  }

  render() {
    return(
      <Router history={history}>
        <div>
          {this.renderSignup()}
          {this.renderAddStory()}
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
                toggleAddStory={this.toggleAddStory}
                deleteStory={this.deleteStory}
                featureStory={this.featureStory}
              />}
          />
        </div>
      </Router>
    )
  }
}

export default App;
