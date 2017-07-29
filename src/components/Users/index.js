import React, { Component } from 'react';

class Users extends Component {

  state={
    user: 'User1'
  }

  handleChange = event => {
    const user = { name: event.target.value, status: 'AUTHED' };
    this.setState({ user });
    this.props.setUser(user);
  }

  render() {

    const { user } = this.props;
    return (
      <div style={ styled }>

        Act as: { user.name ? user.name : '' } <br />
        Roles: <select onChange={ this.handleChange } value={ this.state.value }>
            <option value="Invalid">Set user</option>
            <option value="User1">User1</option>
            <option value="User2">User2</option>
            <option value="User3">User3</option>
          </select>

      </div>
    );
  }
}

export default Users;

const styled={
  width: '33%',
  margin: '0px auto'
};
