// dummy data to display initial notes
//key is an id, value is a note
const dummyData = {
    notes: {
        1: "note 1",
        2: 'note 2',
        3: 'note 3'
    },
    tasks: {
        1: "task 1",
        2: 'task 2',
        3: 'task 3'
      },
    enquiries: {
        1: "enquiry 1",
        2: 'enquiry 2',
        3: 'enquiry 3'
      }
    
}

//create uuid for new notes to use it as an id
const uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
  }


const activities = (state = dummyData, action) => {
    let id = uuidv4()

    switch(action.type) {
      case "ADD_NOTE":
        return {...state, notes: {...state.notes, [id]: action.newNote}};
      case "ADD_ENQUIRY":
        return {...state, enquiries: {...state.enquiries, [id]: action.newEnquiry}};
      case "ADD_TASK":
          return {...state, tasks: {...state.tasks, [id]: action.newTask}};
      default:
        return state;
    }
  }

export default activities