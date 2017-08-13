import Reach from 'react';

const styles = {
  height: '70%',
  width: '20%',
  border: '0',
  outline: '0',
  cursor: 'pointer'.
}

const Button = (props) =>

  <button
    style={styles}
    action={this.props.action}
  >{this.props.value}</button>

export default Button;
