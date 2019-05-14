import React from 'react';
import Story from './story';

const latestStories = {
  title: 'Tales Of Mordor: Chapter',
  author: 'Yolo Baggins'
}

const editorsPicks = {
  title: 'Griffin door: Volume',
  author: 'Gandalf Silver'
}

const buildStories = ({ title, author }) => (
  Array(3).fill().map((_, i) => {
    // const story = storyObject;
    const newTitle = `${title} ${i + 1}`

    return Object.assign({}, { title: newTitle, author });
  })
)

const Stories = () => {
  const renderLatestStories = () => (
    buildStories(latestStories)
      .map(({ title, author }) => (
        <Story key={title} title={title} author={author}/>
      ))
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
