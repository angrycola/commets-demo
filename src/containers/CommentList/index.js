import { connect } from 'react-redux';
import CommentList from '../../components/CommentList';

//
const mapStateToProps = ({ comments }) => {
  return ({ comments });
};

// const mapDispatchToProps = dispatch => {
//   return ({

//   });
// };

export default connect(mapStateToProps)(CommentList);
