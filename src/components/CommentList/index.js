import React from 'react';
import CommentItem from '../CommentItem';

const CommentsList = ({ comments, increaseLikes, user, setNoLimit, filtered }) => {
 
  const commentsNode = comments.map(comment =>
    <CommentItem
      key={ comment.id }
      comment={ comment }
      increaseLikes={ increaseLikes }
      user={ user }
    />
  );

  const handleSetNoLimit = () => {
    setNoLimit();
  };

  return (
    <div className="comment-wrapper comment-wrapper-has-reply">
      { commentsNode }
      <br /><br />
      { comments.length > 3
        && filtered
        && <button
        className="btn btn-block"
        onClick={ handleSetNoLimit }
        >
          More...
        </button>
      }
    </div>
  );
};

export default CommentsList;
