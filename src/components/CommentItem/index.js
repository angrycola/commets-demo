import React, { Component } from 'react';
import NewComment from '../../containers/NewComment';
import Reply from '../Reply';

class CommentItem extends Component {
  state={
    showReply: false
  }

  render() {
    const { showReply } = this.state;
    const { comment } = this.props;
    const repliesNode = comment.replies.map(reply => <Reply key={ reply.id } comment={ reply } />);

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
          <time className="comment-timestamp">&nbsp;{ comment.timestamp.fromNow() }</time>
        </div>
        <div className="comment-body">
          { comment.content }
        </div>
        <div className="comment-actions">
          <div className="comment-voting">
            <button className="up"></button>
            <div className="score">0</div>
            <button className="down"></button>
          </div>
          { showReply
            && <NewComment parentId={ this.props.comment.id } />
           }
          <button
            onClick={ () => this.setState({ showReply: !showReply }) }
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







// const CommentItem = () => {
//   return (
//     <div className="comment-item">
//       <div className="comment-header">
//         <span className="comment-author">
//           <a href="#">
//             <img alt="User1"
//                  src="http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png"
//                  className="avatar-image size32" /> User1
//           </a>
//         </span>
//         <time className="comment-timestamp">12 min ago</time>
//       </div>
//       <div className="comment-body">
//         Even in these scenarios though, you can usually skirt away and clear the board.
//       </div>
//       <div className="comment-actions">
//         <div className="comment-voting">
//           <button className="up"></button>
//           <div className="score">0</div>
//           <button className="down"></button>
//         </div>
//         <NewComment />
//         <button className="btn btn-xs btn-reply">reply</button>
//       </div>
//     </div>
//   );
// };
//
// export default CommentItem;
