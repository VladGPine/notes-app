import React, { Component } from 'react'
// import { Link } from 'react-router-dom'



import Note from './Note'
import AddNote from './AddNote'
import store from '../store'

class HomePage extends Component {
  render() {
    const notes = store.getNotes(); 
    return (
      <div>
        <AddNote />
        <div className='main-content'>
          {
            notes.map((note, id) => {
              return <Note key={id} id={id} title={note.title} content={note.content} />
            })
          }
        </div>
      </div>
    )
  }
}

export default HomePage