import { connect } from 'react-redux';
import Users from '../../components/Users';
import { setUser } from '../../actions/user';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({ setUser: user => dispatch(setUser(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(Users);
