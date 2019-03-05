import React, { Component } from 'react'

import './note.css'

class Note extends Component {
  render() {
    return (
      <div className='note-container'>
        <h3>Title</h3>
        <p>Content Content Content Content Content Content Content </p>
        
          {/* <button className="edit-btn note-btn">Edit</button> */}
          <button className="delete-btn note-btn">
            <span></span>
          </button>
        
      </div>
    )
  }
}

export default Note