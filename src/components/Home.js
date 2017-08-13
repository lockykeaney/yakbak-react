import React, { Component } from 'react';
import PostWrap from './PostWrap';
import CreatePost from './CreatePost';
import Header from './Header';

const styles = {
  container: {
    height: 'auto',
    width: '640px',
    margin: '0 auto',
    border: '1px solid black',
    backgroundColor: 'white'
  },
};

class Home extends Component {

  render() {

    // const { posts, newPost, newComment } = this.props;

    let sorted = posts.sort((a, b) => {
      return new Date(a.postedOn).getTime() - new Date(b.postedOn).getTime()
    }).reverse();

    return (
      <div style={styles.container}>
        {/* <Header updateFeed={this.updateFeed} />
        <CreatePost
          onChange={this.draftPost}
          onSubmit={this.submitPost}
          newPost={newPost}
        />
        <div> */}
          {this.props.posts.map((post) => {
      			return (
      				<PostWrap
                key={this.props.post._id}
                post={this.props.post}
                // onChange={this.draftComment}
                // onSubmit={this.submitComment}
              />
      			)
      		})}
        </div>
      // </div>
    );
  }
}


export default Home;
