import React, { Component } from 'react';
import NewComment from '../../containers/NewComment';
import Reply from '../Reply';

class CommentItem extends Component {
  state={
    showReply: false
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ showReply: false });
  }

  increaseLikes = () => {
    this.props.increaseLikes({ id: this.props.comment.id, user: this.props.user });
  }

  decreaseLikes = () => {
    console.log('decrease');
  }

  handleReplyForm = () => {
    this.setState({ showReply: !this.state.showReply });
  }

  render() {
    const { showReply } = this.state;
    const { comment } = this.props;
    const repliesNode = comment.replies.map(reply =>
      <Reply
        key={ reply.id }
        comment={ reply }
        increaseLikes={ this.props.increaseLikes }
      />
    );

    return (
      <div className="comment-item">
        <div className="comment-header">
          <span className="comment-author">
            <a href="#">
              <img alt="User1"
                src="http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png"
                className="avatar-image size32" />
                { comment.user.name }
            </a>
          </span>
          <time className="comment-timestamp">
            &nbsp;{ comment.timestamp.fromNow() }
          </time>
        </div>
        <div className="comment-body">
          { comment.content }
        </div>
        <div className="comment-actions">
          <div className="comment-voting">
            <button className="up"
              onClick={ this.increaseLikes }
            >
            </button>
            <div className="score">
              { comment.votes.length  }
            </div>
            <button className="down"
              onClick={ this.decreaseLikes }
            >
            </button>
          </div>
          { showReply
            && <NewComment parentId={ this.props.comment.id } />
           }
          <button
            onClick={ this.handleReplyForm }
            className="btn btn-xs btn-reply"
          >
            reply
          </button>
        </div>
        { repliesNode }
      </div>
    );
  }
}

export default CommentItem;
