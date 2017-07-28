import { combineReducers } from 'redux';
import { comments } from './comments';
import { user } from './user';
import { filters } from './filters';
export const reducers = combineReducers({
  comments, user, filters
});
