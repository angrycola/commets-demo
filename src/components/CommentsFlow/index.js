import React from 'react';
import CommentsHeader from '../CommentsHeader';
import CommentList from '../CommentList';

const CommentsFlow = () => {
  return (
    <div className="comments-flow">
      <CommentsHeader />
      <CommentList />
    </div>
  );
};

export default CommentsFlow;
