import React, { Component } from 'react';
import './App.css';

import Note from './Note'

class App extends Component {
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
      <div className="App">
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
    );
  }
}

export default App;
