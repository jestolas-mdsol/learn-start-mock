import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles';

const SignUp = ({
  handleInputChange,
  handleSubmit,
  toggleSignup,
  emailValid,
  formSubmitted,
  name,
  email,
  password,
}) => {
  const handleEmailChange = (e) => {
    handleInputChange({ type: 'email', value: e.target.value })
  }

  const handlePasswordChange = (e) => {
    handleInputChange({ type: 'password', value: e.target.value })
  }

  const handleNameChange = (e) => {
    handleInputChange({ type: 'name', value: e.target.value })
  }

  const showNameError = cx({ 'inputError': formSubmitted && name.length < 1 })

  const showEmailError = cx({ 'inputError': formSubmitted && !emailValid })

  const showPasswordError = cx({ 'inputError': formSubmitted && password.length < 1 })

  return(
    <div>
      <div className="signup_overlay" />
      <div className="transparent_overlay">
        <div className="signup_wrapper">
          <div className="signup_close">
            <p onClick={toggleSignup}>&times;</p>
          </div>
          <h3>Sign Up</h3>
          <input
            value={name}
            className={showNameError}
            onChange={handleNameChange}
            placeholder="Name"
          />
          <input
            value={email}
            className={showEmailError}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            className={showPasswordError}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <button onClick={handleSubmit}>Continue</button>
        </div>
      </div>
    </div>
  )
}

SignUp.propTypes = {
  // proptypes here
}

export default SignUp;
