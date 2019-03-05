import React, { Component } from 'react'
// import { Link } from 'react-router-dom'


import Note from './Note'
import AddNote from './AddNote'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: 'Title',
          content: 'Content content content content content'
        },
        {
          id: 2,
          title: 'Title',
          content: 'Content content content content content'
        },
        {
          id: 3,
          title: 'Title',
          content: 'Content content content content content'
        },
        {
          id: 4,
          title: 'Title',
          content: 'Content content content content content'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <AddNote />
        <div className='main-content'>
          {
            this.state.notes.map(note => {
              return (
                <Note
                  key={note.id}
                  title={note.title}
                  content={note.content} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default HomePage