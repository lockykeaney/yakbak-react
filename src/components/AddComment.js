import React, { Component } from 'react';

const styles = {
  add: {
    height: '40px',
    width: '90%',
    border: '1px solid grey',
    display: 'flex',
    alignContent: 'flex-end',
    marginLeft: '10%'
  },
  text: {
    height: '100%',
    width: '80%',
    border: 'none',
    outline: 'none',
    margin: '10px',
    lineHeight: '100%',
    backgroundColor: 'transparent',
    padding: '0',
  },
  submit: {
    height: '100%',
    width: '20%',
    border: '0',
    outline: '0',
    cursor: 'pointer'
  }
}
class AddComment extends Component {

  _onSubmit() {
    this.props.onSubmit(this.props.post.id)
    console.log(this.props.post);
  }

  render() {
    return (
      <form style={styles.add} onSubmit={this._onSubmit}>
        <input type="textarea" placeholder="Add a comment" onChange={this.props.onChange} style={styles.text} />
        <input type="submit" value="Go" style={styles.submit} />
      </form>
    )
  }

}
export default AddComment;
