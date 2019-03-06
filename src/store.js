let KEY;

class Store {
  
  getNotes() {
    
    let currNotes = localStorage.getItem(KEY);
    currNotes = JSON.parse(currNotes) || [];
    return currNotes;
  }

  addNote(note) {
    let currNotes = this.getNotes();
    currNotes.push(note);
    localStorage.setItem(KEY = note.id, JSON.stringify(currNotes));
  }

  deleteNote(note) {
    let currNotes = this.getNotes();
    currNotes.splice(note.id, 1);
    localStorage.removeItem(KEY = note.id, JSON.stringify(currNotes));
  }
}

const store = new Store();

export default store