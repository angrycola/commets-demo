import C from '../constants';

export const listeningUser = () => {
  return ({ type: C.SET_USER });
};


export const setUser = user => {
  console.log('User', user);
  return ({ type: C.RESET_USER, payload: user });
};
