import { connect } from 'react-redux';
import CommentList from '../../components/CommentList';
import { increaseLikes } from '../../actions';
import { setNoLimit } from '../../actions/filters';

const mapDispatchToProps = dispatch => {
  return ({
    increaseLikes: data => dispatch(increaseLikes(data)),
    setNoLimit: () => dispatch(setNoLimit())
  });
};
 
const mapStateToProps = ({ comments, user, filters }) => {

  const root = comments.filter(comment => comment.parentId === null);

  const sortAllFirst = () =>  {
    switch (filters.mark) {
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


  if (filters.showAll) {
    const sorted = sortAllFirst();
    const { comments, user } = sorted;

    return ({ comments, user, filtered: !filters.showAll });
  } else {
    console.log('HERE');

    const sorted = sortAllFirst();
    const { comments, user } = sorted;
    console.log(comments);



    const chunked = comments.slice(0, 5);
    return ({ comments: chunked, user, filtered: !filters.showAll });
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
