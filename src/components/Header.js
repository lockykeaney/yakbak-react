import React from 'react';

const styles = {
  header: {
    height: '60px',
    width: '100%',
    backgroundColor: 'grey',
    textAlign: 'center',
  },
  h1: {
    fontSize: '26px',
    color: 'white',
    fontWeight: '300',
    cursor: 'pointer'
  }
}
const Header = ({ updateFeed }) =>
  <div style={styles.header}>
    <h1 style={styles.h1} onClick={updateFeed}>YakBak</h1>
  </div>

export default Header;
