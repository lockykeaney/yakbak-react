import React from 'react';
import { css } from 'glamor';

let voteStyle = css({
  width: '20%',
  textAlign: 'center',
  fontSize: '28px',
  color: 'white'
})

const PostVotes = ({ votes }) =>

    <div {...voteStyle}>
      <div></div>
      {votes}
      <div></div>
    </div>

export default PostVotes;
