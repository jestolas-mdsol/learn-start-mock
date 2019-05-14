import React from 'react';
import PropTypes from 'prop-types'; // can implement later
import { Link } from "react-router-dom"
import styles from './styles';

const Header = ({ toggleSignup }) => (
  <div className="header_wrapper">
    <Link to="/">
      <h4 className="header_left_text">LearnStart</h4>
    </Link>
    <p onClick={toggleSignup} className="header_right_text">Sign up</p>
  </div>
)

export default Header;
