import React from 'react';
import Story from './story';
import { latestStories, editorsPicks, buildStories } from './config.js'

const Stories = () => {
  const renderLatestStories = () => (
    buildStories(latestStories)
      .map(({ title, author }, i) => {
        const imageFloatLeft = i % 2 === 1;

        return(
          <Story
            key={title}
            title={title}
            author={author}
            imageFloatLeft={imageFloatLeft}
          />
        )
      })
  )

  const renderEditorsPicks = () => (
    buildStories(editorsPicks)
      .map(({ title, author }) => (
        <Story key={title} title={title} author={author}/>
      ))
  )

  return(
    <div className="stories_container">
      <h2>Stories</h2>
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
