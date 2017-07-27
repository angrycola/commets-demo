import { connect } from 'react-redux';
import NewComment from '../../components/NewComment';
import { addComment } from '../../actions';

const mapStateToProps = (state, props) => {
  return ({ parentId: props.parentId });
};

const mapDispatchToProps = dispatch => {
  return ({
    addComment: comment => dispatch(addComment(comment)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
