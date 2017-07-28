import React from 'react';

const CommentsHeader = ({ commentsTotal, sortOldest, sortNewest }) => {

  const handleOldest = () => {
    sortOldest();
  };

  return (
    <div className="comments-header">
      <div className="pull-right">
        <a href="#" className="text-muted">Best</a> |
        <a
          style={{ cursor: 'pointer' }}
          onClick={ sortNewest }
          className="active"
        >
          Newest
        </a> |
        <a
          style={{ cursor: 'pointer' }}
          onClick={ handleOldest }
          className="text-muted">
            Oldest
        </a>
      </div>
      <b>{ commentsTotal } { commentsTotal === 0 || commentsTotal === 1 ? 'comment' : 'comments' }</b>
    </div>
  );
};

export default CommentsHeader;
