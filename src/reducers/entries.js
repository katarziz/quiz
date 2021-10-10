import { CREATE } from '../constants/actionTypes.js';

const reducers = ( entries = [], action ) => {
  switch (action.type) {
      case CREATE:
          return [...entries, action.payload];
      default:
          return entries;
  }
};

export default reducers