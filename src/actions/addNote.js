const addNote = (newNote, url = '') => {
    return {
      type: 'ADD_NOTE',
      newNote: newNote,
      url: url
    }
  }

export default addNote