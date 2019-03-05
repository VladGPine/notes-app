import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './addNote.css'

class AddNote extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <div className='add-note-container'>
        <Link to='/add-note'>
          <button className='note-btn'>Add new note!</button>
        </Link>
      </div>
    )
  }
}

export default AddNote