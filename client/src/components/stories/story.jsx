import React from 'react';
import styles from './styles';
import cx from 'classnames';

const Story = ({ title, author, imageFloatLeft }) => {
  const productCardClassNames = cx(['product_card', {
    image_left: imageFloatLeft,
    image_right: !imageFloatLeft,
  }])

  return(
    <div className={productCardClassNames}>
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
}

export default Story;
