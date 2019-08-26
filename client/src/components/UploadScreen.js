import React, { Component } from "react";
import App from "./App";
import AppLogin from "./AppLogin";
import Button from "@material-ui/core/Button";

class UploadScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      buttonLabel:'Log Out',
      adminView: '',
      loginscreen:'',
      isAdmin: true
    }
  }

  componentWillMount(){
    var loginscreen = [];
    loginscreen.push(<App parentContext={this} appContext=
      {this.props.parentContext}/>);
    this.setState({
      loginscreen: loginscreen
    });
  }

  handleClick(event) {
    // if (this.state.isAdmin) {
    //   var loginscreen=[];
    //   loginscreen.push(<AppLogin parentContext={this}/>);
    //   this.setState({
    //     loginscreen: loginscreen,
    //     buttonLabel: "Register",
    //     isAdmin: false
    //   })
    // }
    this.logout();
  }

  logout() {
        localStorage.clear();
        window.location.href = '/';
  }


  render() {
    return (
      <div className="uploadScreen">
        {this.state.loginscreen}
        <div>
          <Button variant="contained" onClick={(event) => this.handleClick(event)}>
          {this.state.buttonLabel}
          </Button>
        </div>
      </div>
    );
  }
}

export default UploadScreen;
