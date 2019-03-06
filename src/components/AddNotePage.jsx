import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './addNotePage.css'
import store from '../store'

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
    this.setState({
      newNoteTitle: e.target.value
    })
  }

  contentChangeHandler(e) {
    this.setState({
      newNoteContent: e.target.value
    })
  }

  saveNoteHandler() {
    let {newNoteTitle, newNoteContent} = this.state;

    store.addNote({
      title: newNoteTitle,
      content: newNoteContent
    })
    
  }

  render() {
    // console.log(this.state)
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