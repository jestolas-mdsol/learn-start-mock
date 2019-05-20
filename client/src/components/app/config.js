export const latestStories = {
  title: 'Tales Of Mordor: Chapter',
  author: 'Yolo Baggins'
}

export const editorsPicks = {
  title: 'Gryphon\'s Door: Volume',
  author: 'Gandalf Silver'
}

export const buildStories = ({ title, author }) => (
  Array(3).fill().map((_, i) => {
    const newTitle = `${title} ${i + 1}`

    return Object.assign({}, { title: newTitle, author });
  })
)
