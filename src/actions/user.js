import C from '../constants';

export const listeningUser = () => ({ type: C.SET_USER })
export const setUser = user => ({ type: C.RESET_USER, payload: user });
