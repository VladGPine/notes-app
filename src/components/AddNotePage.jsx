import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './addNotePage.css'

class AddNotePage extends Component {

  render() {
    return (
      <div className='note-page-container'>
        <input type='text' placeholder='This is a new note title'></input>
        <textarea type='textarea' placeholder='This is a new note content'></textarea>
        <Link to='/'>
          <button className='note-btn'>Add</button>
        </Link>
      </div>
    )
  }
}

export default AddNotePage