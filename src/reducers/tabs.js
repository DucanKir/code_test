
const tabs = (state = 'activity', action) => {

    switch(action.type) {
      case "ACTIVITY_TAB":
        return 'activity';
      case "DOCUMENTS_TAB":
        return 'documents';
      case "STATS_TAB":
        return 'stats';
      default:
        return state;
    }
  }

export default tabs