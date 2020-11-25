const addTask = (newTask, url = '') => {
    return {
      type: 'ADD_TASK',
      newTask: newTask,
      url: url
    }
  }
export default addTask