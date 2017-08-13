import React, { Component } from 'react';
import PostWrap from './components/PostWrap';
import CreatePost from './components/CreatePost';
import Header from './components/Header';
import { characterCountdown, checkIfEmpty } from './helperFunctions';
import { css } from 'glamor';

let appStyle = css({
  height: 'auto',
  width: '500px',
  margin: '0 auto',
  backgroundColor: 'white'
})

class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
	     posts: [],
       newPost: '',
       newComment: ''
		};
    this.draftPost = this.draftPost.bind(this);
    this.submitPost = this.submitPost.bind(this);
    this.updateFeed = this.updateFeed.bind(this);
    this.draftComment = this.draftComment.bind(this);
    this.submitComment = this.submitComment.bind(this);
	}

  getAllPosts() {
    fetch('http://localhost:2000/posts')
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data
        })
      })
   }

  draftPost(event) {
    const newPost = event.target.value;
    this.setState({
      newPost
    })
  }

  submitPost(event) {
    event.preventDefault();
    if(checkIfEmpty(this.state.newPost) ) {
      fetch('http://localhost:2000/posts/new', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: this.state.newPost })
      })
      .then( this.getAllPosts.bind(this) )
      .then( () => this.setState({ newPost: '' }) )
    }
  }

  draftComment(event) {
    const newComment = event.target.value;
    this.setState({
      newComment
    })
  }

  submitComment(id) {
    // event.preventDefault()
    console.log(id);
    // if(checkIfEmpty(this.state.newComment) ) {
    //   fetch('http://localhost:2000/posts/new', {
    //     method: 'post',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ content: this.state.newComment })
    //   })
    //   // .then( this.getAllComments.bind(this) )
    //   .then( () => this.setState({ newComment: '' }) )
    // }
  }



  componentWillMount() {
    this.getAllPosts()
  }

  updateFeed(event) {
    event.preventDefault();
    console.log('updating feed');
    this.getAllPosts();
  }

  render() {

    // console.log(sorted);

    const { posts, newPost, newComment } = this.state;

    let sorted = posts.sort((a, b) => {
      return new Date(a.postedOn).getTime() - new Date(b.postedOn).getTime()
    }).reverse();

    return (
      <div {...appStyle}>
        <Header updateFeed={this.updateFeed} />
        <CreatePost
          onChange={this.draftPost}
          onSubmit={this.submitPost}
          newPost={newPost}
        />
        <div>
          {sorted.map((post) => {
      			return (
      				<PostWrap
                key={post._id}
                post={post}
                onChange={this.draftComment}
                onSubmit={this.submitComment}
              />
      			)
      		})}

        </div>
      </div>
    );
  }
}

export default App;
