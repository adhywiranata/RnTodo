import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import {
  LoginContainer,
  RegisterContainer
} from './components/AuthContainer';
import HomeContainer from './components/HomeContainer';

class App extends Component {

  renderScene(route, navigator) {
    switch(route.name) {
      case 'Login':
        return (
          <LoginContainer
            navigator={navigator}
            goToHome={() => {
              navigator.push({
                name: 'Home',
                title: 'Home',
              });
            }}
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
      case 'Home':
        return (
          <HomeContainer
            navigator={navigator}
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
