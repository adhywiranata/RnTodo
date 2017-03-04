import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import {
  LoginContainer,
  RegisterContainer
} from './components/AuthContainer'

class App extends Component {

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

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Login', title: 'Login' }}
        renderScene={ this.renderScene }
      />
    );
  }
}

export default App;
