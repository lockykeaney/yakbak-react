import React from 'react';
import { css } from 'glamor';

let header = css({
  transition: 'all 250ms ease',
  backgroundColor: '#009688',
  color: '#FFFFFF',
  height: '60px',
  width: '100%',
  textAlign: 'center',
  ':hover': {
    color: 'pink'
  },
})

const Header = ({ updateFeed }) =>
  <div {...header}>
    <h1 onClick={updateFeed}>YakBak</h1>
  </div>

export default Header;
