import React from 'react';
import PostVotes from './PostVotes';
// import PostDate from './PostDate';
import { css } from 'glamor';

let container = css({
  height: 'auto',
  width: '80%',
  padding: '10px',
  fontSize: '22px',
  display: 'flex',
  position: 'relative',
  backgroundColor: '#FFFFFF'
})

const PostContent = ({ content, votes }) =>

  <div {...container}>
    {/* <PostDate /> */}
    <p>{content}</p>

  </div>

export default PostContent;
