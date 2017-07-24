import C from '../constants';

export const comments = (state=[], action) => {
  switch (action.type) {
    case C.SET_COMMENTS:      
    return action.payload;

    default: return state;
  }
};
