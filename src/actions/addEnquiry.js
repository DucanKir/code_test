const addEnquiry = (newEnqiry, url = '') => {
    return {
      type: 'ADD_ENQUIRY',
      newEnquiry: newEnqiry,
      url: url
    }
  }

  export default addEnquiry