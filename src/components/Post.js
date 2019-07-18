import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../redux/postReducer';

class Post extends Component {
  constructor(props) {
    super();
    this.state = {
      editing: false,
      newTitle: props.title,
      newContent: props.content
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  flipEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  delete = () => {
    let { id, deletePost } = this.props;
    deletePost(id);
  };

  save = () => {
    let { id } = this.props;
    let { newTitle, newContent } = this.state;
    this.props.editPost(id, newTitle, newContent);
  };

  componentDidUpdate(prevProps) {
    let { title, content } = prevProps;
    if (title !== this.props.title || content !== this.props.content) {
      this.setState({
        editing: false,
        newTitle: this.props.title,
        newContent: this.props.content
      });
    }
  }

  render() {
    // console.log('pro[s in post', this.props);
    let { title, content } = this.props;
    let { editing, newTitle, newContent } = this.state;
    return (
      <div className="post-container">
        {editing ? (
          <div>
            <input
              value={newTitle}
              onChange={this.handleChange}
              name="newTitle"
            />
            <textarea
              value={newContent}
              type="text"
              onChange={this.handleChange}
              name="newContent"
            />
            <button onClick={this.save}>Save</button>
            <button onClick={this.flipEdit}>Cancel</button>
          </div>
        ) : (
          <div>
            <h4>{title}</h4>
            <p>{content}</p>
            <button onClick={this.flipEdit}>Edit</button>
            <button onClick={this.delete}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { deletePost, editPost }
)(Post);
