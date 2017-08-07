import C from '../constants';

export const sortOldest = () => {
  return ({ type: C.SET_OLDEST });
};

export const sortNewest = () => {
  return ({ type: C.SET_NEWEST });
};
 
export const setNoLimit = () => {
  return ({ type: C.SET_NO_LIMIT });
};

export const setLimit = () => {
  return ({ type: C.SET_LIMIT });
};
