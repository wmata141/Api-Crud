import React, { Component } from 'react';
import Table from './Table';
import { fetchBlogPosts, deleteBlogPost } from './Action';

class List extends Component {

constructor(props) {
  super(props);

  this.state = {
    blogPosts: []
  };
};

componentDidMount() {
  fetchBlogPosts()
  .then((data) => {
      this.setState(state => {
          state.blogPosts = data;
          return state;
      })
  })
  .catch((err) => {
      console.error('err', err);
  });
};

onDelete(id) {
  deleteBlogPost(id)
      .then((data) => {
          let blogPosts = this.state.blogPosts.filter((post) => {
              return id !== post.id;
          });
          this.setState(state => {
              state.blogPosts = blogPosts;
              return state;
          }).bind(this);
      })
      .catch((err) => {
          console.error('err', err);
      });
}

render() {
  return (
    <div>
        <Table
          blogPosts={this.state.blogPosts}
          onDelete={this.onDelete.bind(this)}
        />
    </div>
  );

}}

export default List;
