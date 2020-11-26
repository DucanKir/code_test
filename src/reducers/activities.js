// dummy data to display initial notes
//key is an id, value is a note
const dummyData = {
    notes: {
        1: "Note number one",
        2: 'Note number two',
        3: 'Note number three'
    },
    tasks: {
        1: "Task number one",
        2: 'Task number two',
        3: 'Task number three'
      },
    enquiries: {
        1: "Enquiry number one",
        2: 'Enquiry number two',
        3: 'Enquiry number three'
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