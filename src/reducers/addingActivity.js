const addingActivity = (state = "hide", action) => {

    switch(action.type) {
      case "ADD_ACTIVITY":
        return "show";
      case "ADDED":
        return "hide";
      default:
        return "hide";
    }
  }

export default addingActivity

