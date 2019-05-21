import React from 'react';
import styles from './styles';
import cx from 'classnames';

const Story = ({ idx, title, author, imageFloatLeft, deleteStory, featureStory, type, signedIn }) => {
  const productCardClassNames = cx(['product_card', {
    image_left: imageFloatLeft,
    image_right: !imageFloatLeft,
  }])

  const handleDeleteClick = (e) => {
    deleteStory({ storyType: type, idx })
  }

  const handleFeatureClick = (e) => {
    featureStory({ idx })
  }

  const renderDeleteButton = () => (
    signedIn ?
      <button
        onClick={handleDeleteClick}
        className="story_card_rounded_button"
      >
        Delete
      </button> : null
  )

  const renderFeatureButton = () => (
    signedIn && type === 'latestStories' ?
      <button
        onClick={handleFeatureClick}
        className="story_card_rounded_button"
      >
        Feature
      </button> : null
  )

  return(
    <div className={productCardClassNames}>
      {renderDeleteButton()}
      {renderFeatureButton()}
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
