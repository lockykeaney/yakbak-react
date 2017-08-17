import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostWrap from './components/PostWrap';
import CreatePost from './components/CreatePost';
import Header from './components/Header';
import { characterCountdown, checkIfEmpty } from './helperFunctions';
import { css } from 'glamor';
import { getAllPosts } from './actions/allPostsActions';
import { submitPost } from './actions/createPostActions';

let appStyle = css({
  height: 'auto',
  width: '500px',
  margin: '0 auto',
  backgroundColor: 'white'
})

let apiUrl = 'http://localhost:2000/';
if(process.env.REACT_APP_ENV === 'production') {
	apiUrl = process.env.REACT_APP_PRODUCTIONAPI;
}

class App extends Component {

  componentDidMount() {
    this.props.allPosts(apiUrl+'posts')
  }

  // draftPost(event) {
  //   const newPost = event.target.value;
  //   this.setState({
  //     newPost
  //   })
  // }
  //
  // submitPost(event) {
  //   event.preventDefault();
  //   if(checkIfEmpty(this.state.newPost) ) {
  //     fetch('http://localhost:2000/posts/new', {
  //       method: 'post',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ content: this.state.newPost })
  //     })
  //     .then( this.getAllPosts.bind(this) )
  //     .then( () => this.setState({ newPost: '' }) )
  //   }
  // }
  //
  // upvotePost(event) {
  //   event.preventDefault();
  //   console.log(event.target);
  // }
  // downvotePost() {
  //
  // }
  //
  // draftComment(event) {
  //   const newComment = event.target.value;
  //   this.setState({
  //     newComment
  //   })
  // }



  // componentWillMount() {
  //   this.getAllPosts('http://localhost:2000/posts')
  // }

  // updateFeed(event) {
  //   event.preventDefault();
  //   console.log('updating feed');
  //   this.getAllPosts();
  // }

  render() {

    const { posts, newPost, newComment } = this.props;

    let sorted = posts.sort((a, b) => {
      return new Date(a.postedOn).getTime() - new Date(b.postedOn).getTime()
    }).reverse();

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div {...appStyle}>
        <Header updateFeed={this.updateFeed} />
        <CreatePost onChange={this.draftPost} onSubmit={this.submitPost} newPost={newPost} />
        <div>
          {sorted.map((post) => {
      			return (
      				<PostWrap key={post._id} post={post} onChange={this.draftComment} onSubmit={this.submitComment} upvote={this.upvotePost} />
      			)
      		})}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    hasErrored: state.postsHasErrored,
    isLoading: state.postsIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    allPosts: (url) => dispatch(getAllPosts(url)),
    createPost: (url, text) => dispatch(submitPost(url, text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
