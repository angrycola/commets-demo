import React from 'react';
import NewComment from '../NewComment';
import CommentsFlow from '../CommentsFlow';

const CommentsSection = () => {
  return (
    <div className="comments-container">
      <div id="comments">
        <NewComment />
        <CommentsFlow />
      </div>
      ECHO
    </div>
  );
};
export default CommentsSection;
