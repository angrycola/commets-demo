import React, { Component } from 'react';
import CommentsSection from '../CommentsSection';
import Users from '../../containers/Users';


class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Users />
        <CommentsSection />
      </div>
    );
  }
}

export default App;
