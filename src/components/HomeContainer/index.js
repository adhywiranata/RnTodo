import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import Header from './Header';
import Todos from './Todos';

class HomeContainer extends Component {
  render() {
    return (
      <View>
        <Header logout={this.props.goToLogin} />
        <Todos />
      </View>
    )
  }
}

export default HomeContainer;
