import React from 'react';
import NewComment from '../../containers/NewComment';
import CommentsFlow from '../CommentsFlow';

const CommentsSection = () => {
  return (
    <div className="comments-container">
      <div id="comments">
        <NewComment />
        <CommentsFlow />
      </div>      
    </div>
  );
};
export default CommentsSection;
