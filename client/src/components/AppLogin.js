import React, {Component} from 'react';

import './styles/App.css';
import Loginscreen from './Loginscreen';

class AppLogin extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[],
    }
  }

  componentWillMount() {
    var loginPage = [];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
      loginPage: loginPage
    })

    // var table = [];
    // table.push(<WineList parentContext={this}/>);
    // this.setState({
    //   table: table
    // })
  }

  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default AppLogin;
