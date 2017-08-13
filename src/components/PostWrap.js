import React from 'react';
import PostContent from './PostContent';
import PostComments from './PostComments';
import AddComment from './AddComment';

const styles = {
  post: {
    height: 'auto',
    width: '100%',
    border: '1px solid grey',
    padding: '10px',
    display: 'flex',
    flexWrap: 'wrap'
  }
}

const PostWrap = (props) =>

      <div style={styles.post}>
        <PostContent content={props.post.content} votes={props.post.votes} />
        {props.post.comments.map((comment) => {
          return(
            <PostComments key={comment._id} comment={comment} />
          )
        })}
        <AddComment id={props.post._id} onChange={props.onChange} onSubmit={props.onSubmit} />
      </div>

export default PostWrap;
