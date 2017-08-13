import React, { Component } from 'react';

const styles = {
  container: {
    height: '80px',
    width: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  votes: {
    height: '40px',
  },
  arrow: {
    height: '20px',
    width: '60%',
    margin: '0 auto',
    border: '1px solid grey'
  }
}
const PostVotes = ({ votes }) =>

    <div style={styles.container}>
      <div style={styles.arrow}></div>
      {votes}
      <div style={styles.arrow}></div>
    </div>

export default PostVotes;
