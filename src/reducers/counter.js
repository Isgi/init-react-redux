const initialState = {
  number: 3
}

const counter = (state = initialState, action) => {
  // case actions
  switch (action.type) {
    case "ADD_COUNTER":
      const newState = {
        number: action.payload
      }
      return newState;
    case "REMOVE_COUNTER":
      return state;
    default:
      return state;
  }
}

export default counter;