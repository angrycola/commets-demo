import React from 'react';

const CommentsHeader = () => {
  return (
    <div className="comments-header">
      <div className="pull-right">
        <a href="#" className="text-muted">Best</a> |
        <a href="#" className="active">Newest</a> |
        <a href="#" className="text-muted">Oldest</a>
      </div>
      <b>6 Comments</b>
    </div>
  );
};

export default CommentsHeader;
