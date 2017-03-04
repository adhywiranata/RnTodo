import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import LoginContainer from './components/auth/LoginContainer'
import RegisterContainer from './components/auth/RegisterContainer'

class App extends Component {

  constructor() {
    super();
    this.goToRegister = this.goToRegister.bind(this);
  }

  renderScene(route, navigator) {
    switch(route.name) {
      case 'Login':
        return (
          <LoginContainer
            navigator={navigator}
            goToRegister={() => {
              navigator.push({
                name: 'Register',
                title: 'Register'
              })
            }}
            {...route.passProps}
          />
        );
      case 'Register':
        return (
          <RegisterContainer
            navigator={navigator}
            goToLogin={() => {
              navigator.pop()
            }}
            {...route.passProps}
          />
        );
      default:
        return (<View><Text>404</Text></View>)
    }
  }

  goToRegister(navigator) {

  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Login', title: 'Login' }}
        renderScene={ this.renderScene }
      >

      </Navigator>
    );
  }
}

export default App;
