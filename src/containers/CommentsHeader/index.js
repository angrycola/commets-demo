import { connect } from 'react-redux';
import CommentsHeader from '../../components/CommentsHeader';
import { sortOldest, sortNewest } from '../../actions/filters';

const mapStateToProps = ({ comments }) => {
  const root = comments.filter(comment => comment.parentId === null);
  const commentsTotal = root.length;
  return ({ commentsTotal });
};

const mapDispatchToProps = dispatch => ({
  sortOldest: () => dispatch(sortOldest()),
  sortNewest: () => dispatch(sortNewest())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsHeader);
