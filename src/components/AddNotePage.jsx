import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './addNotePage.css'

class AddNotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteTitle: '',
      newNoteContent: ''
    };

    this.titleChangeHandler = this.titleChangeHandler.bind(this);
    this.contentChangeHandler = this.contentChangeHandler.bind(this);
    this.saveNoteHandler = this.saveNoteHandler.bind(this);
  }

  titleChangeHandler(e) {
    console.log(e.target.value)
    this.setState({
      newNoteTitle: e.target.value
    })
  }

  contentChangeHandler(e) {
    console.log(e.target.value)
    this.setState({
      newNoteContent: e.target.value
    })
  }

  saveNoteHandler() {
    localStorage.setItem(this.state.newNoteTitle, this.state.newNoteContent)
    // console.log('saved')
    // this.props.addNewNote(this.state.newNoteTitle, this.state.newNoteContent);
    
  }

  render() {
    return (
      <div className='note-page-container'>
        <input
          type='text'
          placeholder='This is a new note title'
          value={this.state.newNoteTitle}
          onChange={this.titleChangeHandler} />
        <textarea
          type='textarea'
          placeholder='This is a new note content'
          value={this.state.newNoteContent}
          onChange={this.contentChangeHandler}></textarea>
        <Link to='/' >
          <button className='note-btn' onClick={this.saveNoteHandler}>Add</button>
        </Link>
      </div>
    )
  }
}

export default AddNotePage