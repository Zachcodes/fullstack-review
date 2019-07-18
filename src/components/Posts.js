import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/postReducer';

class Posts extends Component {
  componentDidMount() {
    let { posts, userId } = this.props;
    userId = 1;
    this.props.getPosts(userId);
  }
  render() {
    let { posts } = this.props;
    return (
      <div>
        {posts.map(post => {
          return <div key={post.id}>{post.title}</div>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.user.id,
    ...state.posts
  };
}

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
