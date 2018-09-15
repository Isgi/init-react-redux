import { combineReducers } from 'redux';

import counter from './counter';

const appReducer = combineReducers({
  counter: counter
});

export default appReducer;