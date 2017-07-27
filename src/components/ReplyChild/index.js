import React, { Component } from 'react';
import NewComment from '../../containers/NewComment';
import Reply from '../Reply';

class ReplyChild extends Component {
  state={
    showReply: false
  }

  render() {
    const { showReply } = this.state;
    const { comment } = this.props;

    return (
      <div className="comment-reply">
        <div className="comment-item">
          <div className="comment-header">
            <span className="comment-author">
              <a href="#">
                <img alt="User-name"
                  src="http://i.playground.ru/i/00/00/00/00/user/default/icon.20x20.png"
                  className="avatar-image size20" /> { comment.user.name }
              </a>
            </span>
            <time className="comment-timestamp">{ comment.timestamp.fromNow() }</time>
          </div>
          <div className="comment-body">
            <span className="reply-target">@User1{ comment.content }</span>
          </div>
          <div className="comment-actions">
            <div className="comment-voting">
              <button className="up"></button>
              <div className="score">0</div>
              <button className="down"></button>
            </div>
            <button
              onClick={ () => this.setState({ showReply: !showReply }) }
              className="btn btn-xs btn-reply"
            >
              reply
            </button>
          </div>
          { showReply
            && <NewComment parentId={ comment.id }/>
          }

          {
            comment.replies.map(comment => <Reply key={ comment.id } comment={ comment }/> )
          }
        </div>
      </div>
    );
  }
}

export default ReplyChild;
