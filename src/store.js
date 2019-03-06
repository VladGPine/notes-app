const KEY = 'KEY';

class Store {
  getNotes() {
    let currNotes = localStorage.getItem(KEY);
    currNotes = JSON.parse(currNotes) || [];
    return currNotes;
  }

  addNote(note) {
    let currNotes = this.getNotes();
    currNotes.push(note);
    localStorage.setItem(KEY, JSON.stringify(currNotes));
  }

  deleteNote(note) {
    let currNotes = this.getNotes();
    console.log(currNotes)
  }
}

const store = new Store();

export default store