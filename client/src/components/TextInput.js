import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class TextInput extends Component {
  handleChange = (event) => {
    this.props.onChange(event.target.value);
  };

  handleClick = () => {

  };
  
  render() {
    return (
      <div>
        <TextField
          id = {this.props.id}
          placeholder = {this.props.label}
          value = {this.props.value}
          onChange = {this.handleChange}
          onClick = {this.handleClick}
          className = {this.props.className}
          InputLableProps = {{shrink: true,}}
          autoFocus
          />
      </div>
    );
  }
}

export default TextInput;
