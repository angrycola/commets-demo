import { connect } from 'react-redux';
import CommentList from '../../components/CommentList';
import { increaseLikes } from '../../actions';

const mapDispatchToProps = dispatch => {
  return ({
    increaseLikes: data => dispatch(increaseLikes(data))
  });
};

const mapStateToProps = ({ comments, user }) => {
  const root = comments.filter(comment => comment.parentId === null);
  return ({ comments: root, user });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
