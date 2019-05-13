import React from 'react';

const ModalOverlay = ({ content, closeHandler }) => {
  return(
    <div className="overlay">
      {content}
    </div>
  )
}
