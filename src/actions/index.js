import shortid from 'shortid';
import moment from 'moment';
import C from '../constants';

export const addComment = comment => (dispatch, getState) => {
  const comments = getState().comments;

  if (comment.parentId !== null) return dispatch(addReply(comment, comments));

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


const addReply = comment => (dispatch, getState) => {
    const comments = getState().comments;
    const parent = comments.find(item => item.id === comment.parentId);
    const { replies } = parent;

    const created = {
      ...comment,
      id: shortid.generate(),
      timestamp: moment(),
      votes: [],
      replies: []
    };

    replies.push(created);

    const updatedComment = { ...created, replies };
    const updatedComments = [ ...comments, ...updatedComment, created ];

    return dispatch(setComments(updatedComments));
};


export const increaseLikes = data => (dispatch, getState) =>  {  
  const comments = getState().comments;

  const comment = comments.find(item => item.id === data.id);
  const { votes } = comment;
  const vote = { [data.id]: data.user };
  votes.push(vote);

  const updated = { ...comment, votes };
  const updatedComments = [ ...comments, ...updated ];
  return dispatch(setComments(updatedComments));
};


const setComments = comments => ({ type: C.SET_COMMENTS, payload: comments });
