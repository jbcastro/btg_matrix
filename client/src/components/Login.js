import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import TextField from './TextInput';
// import axios from 'axios';
import UploadScreen from "./UploadScreen";

const validateUserName = userName => {
  console.log('userName: ' + userName);
  return(userName === "Admin" ? 200 : false);
  // return new Promise((res, rej) =>
    // setTimeout(() => res(userName === "Admin" ? 200 : false), 1000)
  // );
};

const validatePasword = password => {
  console.log('password: ' + password);
  return(password === "Password" ? 200 : false);
  // return new Promise((res, rej) =>
    // setTimeout(() => res(userName === "Admin" ? 200 : false), 1000)
  // );
};

const validate = ({firstName, lastName}) => {
  return {
    firstName: !firstName || firstName.trim().length === 0
      ? "First Name is required"
      : false,
    lastName: !lastName || lastName.trim().length === 0
      ? "Last Name is required"
      : false
  };
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  // validate = event => {
  //   validateUserName(event.target.value).then(validationResult =>
  //     this.setState(({errors}) => ({
  //       errors: {
  //         ...errors,
  //         userName:validationResult
  //       }
  //     }))
  //   );
  // };

  handleClick(event) {
    var apiBaseUrl = "http://localhost:5000/express_backend/";
    var self = this;
    var payload={
      "email":this.state.username,
      "password": this.state.password
    }

    // axios.post(apiBaseUrl + 'login', payload)
      // .then(function (response) {
        // console.log(response);
        let replyUser = validateUserName(this.state.username);
        console.log('replyUser: ' + replyUser);

        let replyPass = validatePasword(this.state.password);
        console.log('replyPass: ' + replyPass);

        // if (response.data.code == 200) {
        if (replyUser == 200) {
          console.log("Login Successful");
          var uploadScreen=[];
          uploadScreen.push(<UploadScreen appContext=
            {self.props.appContext}/>)
            self.props.appContext.setState({loginPage:[], uploadScreen: uploadScreen})
        }
        else if (replyUser == 204) {
          console.log("Username password do not match");
          alert("Username and Password do not match");
        }
        else {
          console.log("Username does not exist");
          alert("Username does not exist");
        }

        // if (replyPass == 200) {
        //   console.log("Login Successful");
        //   var uploadScreen=[];
        //   uploadScreen.push(<UploadScreen appContext=
        //     {self.props.appContext}/>)
        //     self.props.appContext.setState({loginPage:[], uploadScreen: uploadScreen})
        // }
        // else if (replyPass == 204) {
        //   console.log("Username password do not match");
        //   alert("Username and Password do not match");
        // }
        // else {
        //   console.log("Username does not exist");
        //   alert("Username does not exist");
        // }

      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
  }

  // handleClick(event) {
  //   var apiBaseUrl = "http://localhost:4000/api/";
  //   var self = this;
  //   var payload={
  //     "email":this.state.username,
  //     "password": this.state.password
  //   }
  //
  //   axios.post(apiBaseUrl + 'login', payload)
  //     .then(function (response) {
  //       console.log(response);
  //
  //       if (response.data.code == 200) {
  //         console.log("Login Successful");
  //         var uploadScreen=[];
  //         uploadScreen.push(<UploadScreen appContext=
  //           {self.props.appContext}/>)
  //           self.props.appContext.setState({loginPage:[], uploadScreen: uploadScreen})
  //       }
  //       else if (response.data.code == 204) {
  //         console.log("Username password do not match");
  //         alert("Username and Password do not match");
  //       }
  //       else {
  //         console.log("Username does not exist");
  //         alert("Username does not exist");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div>
          <div>
            <AppBar
              title = "Login"
            />
            <TextField
              placeholder="Username"
              onChange = { (event) =>
                this.setState({username: event.target.value})}
            />
            <br />

            <TextField
              placeholder="Password"
              onChange = { (event) =>
                this.setState({password: event.target.value})}
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
export default Login;
