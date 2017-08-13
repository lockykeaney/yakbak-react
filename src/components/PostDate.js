import React from 'react';

const styles = {
  votes: {
    height: '20%',
    width: '30%',
    position: 'absolute',
    paddinggRight: '10px',
    top: '0',
    right: '0'
  },
  font: {
    margin: '0',
    textAlign: 'right'
  }
}
const PostDate = () =>

  <div style={styles.votes}>
    <p style={styles.font}>posted on 0/0/0</p>
  </div>

export default PostDate;
