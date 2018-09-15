const addCounter = () => {
  return {
    type: 'ADD_COUNTER',
    payload: 100
  }
}

const removeCounter = () => {
  return {
    type: 'REMOVE_COUNTER',
    payload: 1
  }
}

export {
  addCounter,
  removeCounter
}