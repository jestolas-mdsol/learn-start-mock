import React from 'react';
import styles from './styles';

const Story = ({ title, author }) => (
  <div className="product_card">
    <div className="image_placeholder" />
    <div className="product_description">
      <h4>{title}</h4>
      <div className="author_wrapper">
        <div className="author_image_placeholder"></div>
        <p>{author}</p>
      </div>
    </div>
  </div>
)

export default Story;
