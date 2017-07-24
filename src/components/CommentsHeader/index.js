import React from 'react';

const CommentsHeader = () => {
  return (
    <div className="comments-header">
      <div className="pull-right">
        <a href="#" class="text-muted">Best</a> |
        <a href="#" class="active">Newest</a> |
        <a href="#" class="text-muted">Oldest</a>
      </div>
      <b>6 Comments</b>
    </div>
  );
};

export default CommentsHeader;
