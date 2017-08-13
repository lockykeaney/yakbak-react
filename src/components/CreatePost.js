import React from 'react';

const styles = {
  create: {
    height: '80px',
    width: '60%',
    margin: '10px auto',
    border: '1px solid grey',
    padding: '10px',
    display: 'flex',
    alignContent: 'flex-end',
  },
  text: {
    height: '100%',
    width: '80%',
    lineHeight: '100%',
    fontSize: '22px',
    border: 'none',
    outline: 'none',
    margin: '10px',
    backgroundColor: 'transparent',
    padding: '0',
    margin: '0'
  },
  submit: {
    height: '70%',
    width: '20%',
    border: '0',
    outline: '0',
    cursor: 'pointer'
  },
  form: {
    width: '100%',
    height: '100%'
  }
}

const CreatePost = ({ onChange, onSubmit, newPost }) =>

  <div style={styles.create}>
    <form onSubmit={onSubmit} style={styles.form}>
      <input type="textarea" rows="2" placeholder="Create a post" style={styles.text} onChange={onChange} value={newPost} />
      <input type="submit" value="Go" style={styles.submit} />
    </form>

  </div>

export default CreatePost;
