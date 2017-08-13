import React from 'react';

const styles = {
  comments: {
    height: '100%',
    width: '90%',
    borderBottom: '1px solid grey',
    padding: '10px',
    fontSize: '16px',
    display: 'flex',
    alignContent: 'flex-end',
    marginLeft: '10%'
  }
}

const PostComments = ({ comment }) =>

  <div style={styles.comments}>
    <p>{comment.comment}</p>
  </div>

export default PostComments;
