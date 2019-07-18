import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../redux/postReducer';
import Post from './Post'

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
          return <Post key={post.id} {...post}/>;
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
