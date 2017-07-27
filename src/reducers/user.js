import C from '../constants';

const initialState={ name: 'ANONIMOUS', status: 'ANONIMOUS' };

export const user = (state=initialState, action) => {
  switch (action.type) {
    case C.SET_USER:
    return state;
    case C.RESET_USER:
    return action.payload;

    default: return state;
  }
};
