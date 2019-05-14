import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const Hero = () => (
  <div className="hero">
    <h1>Stay hungry. Stay Foolish.</h1>
    <p>Learn from the hottest startups in the world</p>
    <Link to="/stories">
      <button>Read Now</button>
    </Link>
  </div>
)

export default Hero;
