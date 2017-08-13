import React from 'react';
import { css } from 'glamor';

let container = css({
  backgroundColor: '#009688',
  color: '#FFFFFF',
  height: '80px',
  width: '100%',
  padding: '5%'
})
let textbox = css({
  width: '77.5%',
  padding: '5px',
  marginRight: '2.5%'
})
let button = css ({
  transition: 'all 250ms ease',
  boxSizing: 'border-box',
  width: '20%',
  padding: '5px',
  border: 'none',
  border: '2px solid white',
  borderRadius: '5px',
  backgroundColor: 'transparent',
  color: 'white',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#FFFFFF',
    border: '2px solid #009688',
    color: '#009688'
  }
})

const CreatePost = ({ onChange, onSubmit, newPost }) =>

  <div {...container}>

    <form onSubmit={onSubmit}>
      <input {...textbox} type="textarea" rows="2" placeholder="Create a post" onChange={onChange} value={newPost} />
      <input {...button} type="submit" value="Go" />
    </form>

  </div>

export default CreatePost;
