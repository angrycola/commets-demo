import C from '../constants';

export const sortOldest = () => {
  return ({ type: C.SET_OLDEST });
};

export const sortNewest = () => {
  return ({ type: C.SET_NEWEST });
};
