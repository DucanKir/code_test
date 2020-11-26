import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import addNote from './actions/addNote';
import addEnquiry from './actions/addEnquiry';
import newActivity from './actions/newActivity';
import addTask from './actions/addTask';
import addActivity from './actions/addActivity';
import {chooseActivityTab, chooseDocumentsTab, chooseStatsTab} from './actions/chooseTab';

function App() {
  const { notes, enquiries, tasks }  = useSelector(state => state.activities);

  const allActivities =  Object.values(notes).concat(Object.values(enquiries), Object.values(tasks))
  const tabs = useSelector(state => state.tabs);
  const addingActivity = useSelector(state => state.addingActivity);
  const newNote = useSelector(state => state.newNote);
  


  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addNote(event.target.notes.value))

  }

  return (
    <div className="App">
      <div className="sidebar">
        <p className="title">PERCHPEEK</p>
        <p className="underline">Overview</p>
        <h3 className="category">MANAGE</h3>
        <p>Users</p>
        <p>Properties</p>
        <p>Viewings</p>
        <p className="underline">Support</p>
        <h3 className="category">GET HELP</h3>
        <p>Knowledge Base</p>
      </div>
      <div className="profile">
        <input className="search" type="text" id="name" placeholder="search" name="name" required
        minlength="4" maxlength="8" size="50" />
        <div className="user">
          <h2 className="username">John Doe</h2>
          <div className='about'>
            <div className='avatar'>
            </div>
            <p>Moving to <a>London, UK</a> </p>
          </div>
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
               <div className="activitiesList">
                {allActivities.map(act => <p className="action">John Doe created {act}</p>)}
              </div>
               <div className="addingAct" style={addingActivity == 'show' ? {display: 'flex'} : {display: 'none'}}>
                 <div className='formContainer'>
                  <form onSubmit={(event) => handleSubmit(event)}>
                    <h2>Add Note</h2>
                    <select name="type" id="type">
                        <option value="notes">Notes</option>
                        <option value="tasks">Tasks</option>
                        <option value="enquiriues">Enquiriues</option>
                      </select><br />
                      <label for="link">URL</label><br />
                      <input className='input'type="text" id="fname" name="fname" /><br />
                      <label for="notes">Add Notes</label><br />
                      <textarea cols="37" rows="5" className='input'type="text"  id="notes" name="notes" />
                      <button className="submitButton"type="submit"> submit </button>
                    </form>
                  </div>
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
