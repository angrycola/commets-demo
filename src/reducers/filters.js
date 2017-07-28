import C from '../constants';

export const filters = (state='NEWEST', action) => {
  switch (action.type) {
    case C.SET_NEWEST:
    return 'NEWEST';

    case C.SET_OLDEST:
    return 'OLDEST';
    
    default: return state;
  }
};
