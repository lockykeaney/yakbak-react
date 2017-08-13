import React from 'react';
import PostVotes from './PostVotes';
// import PostDate from './PostDate';

const PostContent = ({ content, votes }) =>

  <div style={styles.content}>
    {/* <PostDate /> */}
    <PostVotes votes={votes} />
    <p>{content}</p>
  </div>

export default PostContent;

const styles = {
  content: {
    height: 'auto',
    width: '100%',
    border: '1px solid grey',
    padding: '10px',
    fontSize: '22px',
    display: 'flex',
    position: 'relative'
  }
}
