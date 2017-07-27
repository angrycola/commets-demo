import { combineReducers } from 'redux';
import { comments } from './comments';
import { user } from './user';
export const reducers = combineReducers({
  comments, user
});
