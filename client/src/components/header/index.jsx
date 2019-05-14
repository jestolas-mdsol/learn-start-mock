import React from 'react';
import PropTypes from 'prop-types'; // can implement later
import styles from './styles';

const Header = ({ toggleSignup }) => (
  <div className="header_wrapper">
    <h4 className="header_left_text">LearnStart</h4>
    <p onClick={toggleSignup} className="header_right_text">Sign up</p>
  </div>
)

export default Header;
