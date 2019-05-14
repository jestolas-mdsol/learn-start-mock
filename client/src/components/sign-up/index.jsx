import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const SignUp = ({ handleInputChange, handleSubmit, toggleSignup }) => {
  const handleEmailChange = (e) => {
    handleInputChange({ type: 'email', value: e.target.vallue })
  }
  const handlePasswordChange = (e) => {
    handleInputChange({ type: 'password', value: e.target.vallue })
  }

  return(
    <div>
      <div className="signup_overlay" />
      <div className="transparent_overlay">
        <div className="signup_wrapper">
          <div className="signup_close">
            <p onClick={toggleSignup}>&times;</p>
          </div>
          <h3>Sign Up</h3>
          <input onChange={handleEmailChange} placeholder="Email" />
          <input onChange={handlePasswordChange} placeholder="Password" />
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
