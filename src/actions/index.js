import shortid from 'shortid';
import moment from 'moment';
import C from '../constants';

export const addComment = comment => (dispatch, getState) => {
  const comments = getState().comments;
  const parentId = comment.parentId === undefined ? null : comment.parentId;

  const created = {
    ...comment,
    id: shortid.generate(),
    timestamp: moment(),
    votes: [],
    replies: []
  };

  const updated = comments.concat(created);
  dispatch(setComments(updated));
};

const setComments = comments => ({ type: C.SET_COMMENTS, payload: comments });
