import React from 'react';

const ExpandedStory = ({ title, content, author }) => {
  return(
    <div>
      <h1>{title}</h1>
      <p>By {author}</p>
      <p>{content}</p>
    </div>
  )
}

export default ExpandedStory;
