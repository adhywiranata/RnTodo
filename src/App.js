import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import LoginContainer from './components/auth/LoginContainer'

class App extends Component {

  renderScene(route, navigator) {
    if(route.name === 'Login') {
      return (
        <LoginContainer
          navigator={navigator}
          {...route.passProps}
        />
      );
    }
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
