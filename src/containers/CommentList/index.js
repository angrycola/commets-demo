import { connect } from 'react-redux';
import CommentList from '../../components/CommentList';
import { increaseLikes } from '../../actions';

const mapDispatchToProps = dispatch => {
  return ({
    increaseLikes: data => dispatch(increaseLikes(data))
  });
};

const mapStateToProps = ({ comments, user, filters }) => {

  const root = comments.filter(comment => comment.parentId === null);

  switch (filters) {
    case "OLDEST":
    const oldest = root.sort((a, b) => {
      const atime = a.timestamp.valueOf();
      const btime = b.timestamp.valueOf();

      if (atime > btime ) {
        return -1;
      } else if (atime < btime) {
        return 1;
      } else {
        return 0;
      }
    });
      return ({ comments: oldest, user });

    case 'NEWEST':
    const newest = root.sort((a, b) => {
      const atime = a.timestamp.valueOf();
      const btime = b.timestamp.valueOf();

      if (atime > btime ) {
        return 1;
      } else if (atime < btime) {
        return -1;
      } else {
        return 0;
      }
    });

    return ({ comments: newest, user });
    default: return ({ comments: newest, user });
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
