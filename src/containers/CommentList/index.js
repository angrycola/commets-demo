import { connect } from 'react-redux';
import CommentList from '../../components/CommentList';

//
const mapStateToProps = ({ comments }) => {
  const root = comments.filter(comment => comment.parentId === null);
  return ({ comments: root });
};

export default connect(mapStateToProps)(CommentList);
