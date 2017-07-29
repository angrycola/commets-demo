import { connect } from 'react-redux';
import NewComment from '../../components/NewComment';
import { addComment } from '../../actions';

const mapStateToProps = ({ user }, props) => {
  return ({ parentId: props.parentId, user });
};

const mapDispatchToProps = dispatch => {
  return ({
    addComment: comment => dispatch(addComment(comment)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
