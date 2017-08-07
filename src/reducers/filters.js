import C from '../constants';

export const filters = (state={ mark: 'NEWEST', showAll: false }, action) => {
  switch (action.type) {
    case C.SET_NEWEST:
    return { mark: 'NEWEST', showAll: true };

    case C.SET_OLDEST:
    return { mark: 'OLDEST', showAll: true };

    case C.SET_NO_LIMIT:
    return { ...state, showAll: true };

    case C.SET_LIMIT:
    return { ...state, showAll: false };

    default: return state;
  }
};
