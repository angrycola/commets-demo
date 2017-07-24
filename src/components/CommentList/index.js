import React from 'react';
import CommentItem from '../CommentItem';

const CommentsList = ({ comments }) => {
  const commentsNode = comments.map(comment => <CommentItem key={ comment.id } comment={ comment } /> );

  return (
    <div className="comment-wrapper comment-wrapper-has-reply">
      { commentsNode }
    </div>
  );
};

export default CommentsList;
