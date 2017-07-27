import React, { Component } from 'react';

class NewComment extends Component {

  state={
    content: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const parentId = this.props.parentId === undefined ? null : this.props.parentId;
    const comment = { content: this.state.content, parentId, user: this.props.user };
    this.setState({ content: '' });
    this.props.addComment(comment);
  }

  render() {
    
    return(
      <form>
        <div className="comment-entry">
          <div className="comment-entry-header">
            <img alt="MyNick" src="http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png"
                 className="avatar-image size32" />{ this.props.user.name }
          </div>
          <div className="form-group">
            <textarea
              onChange={ this.handleChange }
              className="form-control"
              name="content"
              value={ this.state.content }
              placeholder="Put your shit here..."
            >
            </textarea>
          </div>
          <div className="comment-entry-footer">
            <button
              onClick={ this.handleSubmit }
              type="submit"
              className="btn btn-default btn-sm btn-block">
                Submit
              </button>
          </div>
        </div>
      </form>
    );
  }
}

export default NewComment;
