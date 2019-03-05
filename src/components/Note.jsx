import React, { Component } from 'react'

import './note.css'

class Note extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.content = props.content;
    this.id = props.id
  }

  render() {
    return (
      <div className='note-container'>
        <h3>{this.title}</h3>
        <p>{this.content}</p>
        
          {/* <button className="edit-btn note-btn">Edit</button> */}
          <button className="delete-btn note-btn">
            <span></span>
          </button>
        
      </div>
    )
  }
}

export default Note