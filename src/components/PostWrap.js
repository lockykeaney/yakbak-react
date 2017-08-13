import React from 'react';
import PostContent from './PostContent';
import PostComments from './PostComments';
import PostVotes from './PostVotes';
import AddComment from './AddComment';
import { css } from 'glamor';

const wrap = css({
  backgroundColor: '#009688',
  height: 'auto',
  width: '100%',
  padding: '10px',
  display: 'flex',
  flexWrap: 'wrap'
})

const PostWrap = (props) =>

      <div {...wrap}>
        <PostContent content={props.post.content} />
        <PostVotes votes={props.post.votes} />

        {props.post.comments.map((comment) => {
          return(
            <PostComments key={comment._id} comment={comment} />
          )
        })}
        {/* <AddComment id={props.post._id} onChange={props.onChange} onSubmit={props.onSubmit} /> */}
      </div>

export default PostWrap;
