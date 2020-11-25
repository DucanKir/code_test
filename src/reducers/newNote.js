const addingActivity = (state = '', action) => {

    switch(action.type) {
      case "NEW_ACTIVITY":
        return state;
      default:
        return "";
    }
  }

export default addingActivity