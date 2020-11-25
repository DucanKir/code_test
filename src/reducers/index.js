import {combineReducers} from 'redux';
import activities from './activities';
import tabs from './tabs'
import addingActivity from './addingActivity';
import newNote from './newNote';

const allReducers = combineReducers({
    activities: activities,
    tabs: tabs,
    addingActivity: addingActivity,
    newNote: newNote,

})

export default allReducers