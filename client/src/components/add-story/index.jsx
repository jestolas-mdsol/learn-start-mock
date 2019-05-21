import React from 'react';
import styles from './styles';

const AddStory = ({ storyTitle, storyContent, handleInputChange, createStory, toggleAddStory }) => {
  const handleTitleChange = (e) => {
    handleInputChange({ type: 'storyTitle', value: e.target.value })
  }

  const handleContentChange = (e) => {
    handleInputChange({ type: 'storyContent', value: e.target.value })
  }

  const handleAddClick = (e) => {
    e.preventDefault();

    createStory({ title: storyTitle, content: storyContent })
    toggleAddStory();
  }

  return(
    <div>
      <div className="overlay" />
      <div className="add_story_wrapper">
        <h1>Add Story</h1>
        <div className="add_story_form">
          <input
            className="title"
            placeholder="Title"
            onChange={handleTitleChange}
            value={storyTitle}
          />
          <input
            className="content"
            placeholder="Story"
            onChange={handleContentChange}
            value={storyContent}
          />
          <button
            onClick={handleAddClick}
            className="create_story">Add
          </button>
          <button
            onClick={toggleAddStory}
            className="cancel_story">Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddStory;
