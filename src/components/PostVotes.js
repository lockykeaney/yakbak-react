import React from 'react';
import { css } from 'glamor';
import { Icon } from 'react-fa';

let voteStyle = css({
  width: '20%',
  textAlign: 'center',
  fontSize: '25px',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})
let arrow = css({
  cursor: 'pointer',
  color: 'white',
  ':hover': {
    color: 'red'
  }
})


const PostVotes = ({ votes, upvote }) =>

    <div {...voteStyle}>
      <Icon
        {...arrow}
        name='arrow-up'
        onClick={upvote}
      />
      {votes}
      <Icon
        {...arrow}
        name='arrow-down'
      />
    </div>

export default PostVotes;
