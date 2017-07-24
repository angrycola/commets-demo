import { connect } from 'react-redux';
import NewComment from '../../components/NewComment';
import { addComment } from '../../actions';
// 
// const mapStateToProps = (props) => {
//   return ({  });
// };

const mapDispatchToProps = dispatch => {
  return ({
    addComment: comment => dispatch(addComment(comment))
  });
};

export default connect(null, mapDispatchToProps)(NewComment);
