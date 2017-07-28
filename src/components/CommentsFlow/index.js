import React from 'react';
import CommentsHeader from '../../containers/CommentsHeader';
import CommentList from '../../containers/CommentList';

const CommentsFlow = () => {
  return (
    <div className="comments-flow">
      <CommentsHeader />
      <CommentList />
    </div>
  );
};

export default CommentsFlow;
