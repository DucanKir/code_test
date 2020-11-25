import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import addNote from './actions/addNote';
import addEnquiry from './actions/addEnquiry';
import newActivity from './actions/newActivity';
import addTask from './actions/addTask';
import addActivity from './actions/addTask';
import {chooseActivityTab, chooseDocumentsTab, chooseStatsTab} from './actions/chooseTab';

function App() {
  const { notes, enquiries, tasks }  = useSelector(state => state.activities);

  const allActivities =  Object.values(notes).concat(Object.values(enquiries), Object.values(tasks))
  const tabs = useSelector(state => state.tabs);
  const addingActivity = useSelector(state => state.addingActivity);
  const newNote = useSelector(state => state.newNote);
  

  const dispatch = useDispatch();
  console.log(addingActivity)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addNote(event.target.notes.value))

  }

  return (
    <div className="App">
      <div className="sidebar">
        <p>PERCHPEEK</p>
        <p>Overview</p>
        <h3>MANAGE</h3>
        <p>Users</p>
        <p>Properties</p>
        <p>Viewings</p>
        <p>Support</p>
        <h3>GET HELP</h3>
        <p>Knowledge Base</p>
      </div>
      <div className="profile">
        <input className="search" type="text" id="name" placeholder="search" name="name" required
        minlength="4" maxlength="8" size="50" />
        <div className="user">
          <h2 className="username">John Doe</h2>
        </div>
        <div className="info">
          <div className="tabs">
            <button className="tab" onClick={() => dispatch(chooseActivityTab())}>Avtivity Feed</button>
            <button className="tab" onClick={() => dispatch(chooseStatsTab())}>Stats</button>
            <button className="tab" onClick={() => dispatch(chooseDocumentsTab())}>Documents</button>
          </div>
          <div className="data">
            
             { tabs == 'documents' || tabs == 'stats' ? "Data not available" : 
             <div>
               <button onClick={() => dispatch(addActivity())}>Add New Activity</button>
               {allActivities.map(act => <p> {act}</p>)}

               <div className="addingAct">
               <form onSubmit={(event) => handleSubmit(event)}>
                <select name="type" id="type">
                    <option value="notes">Notes</option>
                    <option value="tasks">Tasks</option>
                    <option value="enquiriues">Enquiriues</option>
                  </select><br />
                  <label for="link">URL</label><br />
                  <input type="text" id="fname" name="fname" /><br />
                  <label for="notes">Add Notes</label><br />
                  <input type="textfield" id="notes" name="notes" />
                  <button type="submit"> submit </button>
                </form>
               </div>
            </div>
          
             }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
