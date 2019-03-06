import React, { Component } from 'react'

import './note.css'
import store from '../store'

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      id: this.props.id,
      title: props.title,
      content: props.content
    }
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
  }

  deleteNoteHandler() {
    let {id} = this.state;

    store.deleteNote({
      id: id
    })
    this.setState({
      isVisible: false
    })
  }


  render() {
    return (
      this.state.isVisible ? (<div className='note-container' id={this.state.id}>
      <h3>{this.state.title}</h3>
      <p>{this.state.content}</p>
        <button className="delete-btn note-btn" onClick={this.deleteNoteHandler}>
          <span></span>
        </button>
    </div>) : null
      
    )
  }
}

export default Note