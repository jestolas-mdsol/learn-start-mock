import React from 'react';
import Story from './story';

const Stories = ({
  history,
  latestStories,
  editorsPicks,
  signedIn,
  toggleAddStory,
  deleteStory,
  featureStory,
}) => {
  const renderLatestStories = () => (
    latestStories.map(({ title, author }, i) => {
      const imageFloatLeft = i % 2 === 1;

      return(
        <Story
          idx={i}
          key={title}
          title={title}
          author={author}
          imageFloatLeft={imageFloatLeft}
          deleteStory={deleteStory}
          featureStory={featureStory}
          type="latestStories"
          signedIn={signedIn}
        />
      )
    })
  )

  const renderEditorsPicks = () => (
    editorsPicks.map(({ title, author }, i) => {
      const imageFloatLeft = i % 2 === 1;

      return(
        <Story
          idx={i}
          key={title}
          title={title}
          author={author}
          imageFloatLeft={imageFloatLeft}
          deleteStory={deleteStory}
          featureStory={featureStory}
          type="editorsPicks"
          signedIn={signedIn}
        />
      )
    })
  )

  const renderAddStoryButton = () => (signedIn ? <button onClick={toggleAddStory} className="add_story">Add Story</button> : null)

  return(
    <div className="stories_container">
      <h2>Stories</h2>
      {renderAddStoryButton()}
      <div className="stories_wrapper">
        <p>Latest Stories</p>
        <div className="stories_flex">
        {renderLatestStories()}
        </div>
      </div>
      <div className="stories_wrapper">
        <p>Editor's Picks</p>
        <div className="stories_flex">
        {renderEditorsPicks()}
        </div>
      </div>
    </div>
  )
}

export default Stories;
