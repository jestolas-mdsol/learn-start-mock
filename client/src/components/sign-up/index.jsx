import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const SignUp = ({ handleEmailChange, handlePasswordChange, handleSubmit }) => {
  return(
    <div className="signup_overlay">
      <div className="signup_wrapper">
        <h3>Sign Up</h3>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>Continue</button>
      </div>
    </div>
  )
}

SignUp.propTypes = {
  // proptypes here
}

export default SignUp;
