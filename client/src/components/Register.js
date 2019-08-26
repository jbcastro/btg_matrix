import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import axios from 'axios';
import Login from './Login'; // for handleClick function

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:4000/api/";

    console.log("values", this.state.first_name, this.state.lastName, this.state.email, this.state.password);
    // To be done: check for empty values before hitting Submit
    var self = this;
    var payload={
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "email": this.state.email,
      "password": this.state.password
    }

    // axios.post(apiBaseUrl + '/register', payload)
    //   .then(function (response) {
    //     console.log(response);
    //     if (response.data.code == 200) {
    //       // console.log("Registration Successful");
    //       var loginscreen=[];
    //       loginscreen.push(<Login parentContext={this}/>);
    //       var loginmessage = "Not Registered yet. Go to Registration";
    //       self.props.parentContext.setState({loginscreen: loginscreen,
    //         loginmessage: loginmessage,
    //         buttonLabel: "Register",
    //         isLogin: true
    //       });
    //     }
    //   })
    //   .catch (function (error) {
    //     console.log(error);
    //   });
  }

  render() {
    return (
      <div>
          <div>
            <AppBar
              title="Register"
            />
            <TextField
              placeholder="First Name"
              onChange = { (event, newValue) =>
                this.setState({first_name: newValue})}
            />
            <br />

            <TextField
              placeholder="Last Name"
              onChange = { (event, newValue) =>
                this.setState({last_name: newValue})}
            />
            <br />

            <TextField
              type="email"
              placeholder="Email"
              onChange={ (event, newValue) =>
                this.setState({email: newValue})}
            />
            <br />

            <TextField
              type="password"
              placeholder="Password"
              onChange={ (event, newValue) =>
                this.setState({password: newValue})}
            />
            <br />

            <Button variant="contained" onClick={(event) => this.handleClick(event)}>
            Submit
            </Button>
          </div>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Register;
