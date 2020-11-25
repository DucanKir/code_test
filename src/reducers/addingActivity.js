const addingActivity = (state = "hide", action) => {

    switch(action.type) {
      case "ADD_ACTIVITY":
        return "show";
      case "ADDED":
        return "close";
      default:
        return "close";
    }
  }

export default addingActivity