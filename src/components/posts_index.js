import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  render () {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/create" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }

  renderPosts () {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  componentWillMount () {
    this.props.fetchPosts();
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.all
  };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
