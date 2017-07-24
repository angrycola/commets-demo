import React from 'react';


const CommentItem = () => {
  return (
    <div className="comment-item">
      <div className="comment-header">
        <span className="comment-author">
          <a href="#">
            <img alt="User1"
                 src="http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png"
                 className="avatar-image size32" /> User1
          </a>
        </span>
        <time className="comment-timestamp">12 min ago</time>
      </div>
      <div className="comment-body">
        Even in these scenarios though, you can usually skirt away and clear the board.
      </div>
      <div className="comment-actions">
        <div className="comment-voting">
          <button className="up"></button>
          <div className="score">0</div>
          <button className="down"></button>
        </div>
        <button className="btn btn-xs btn-reply">reply</button>
      </div>
    </div>
  );
};

export default CommentItem;
