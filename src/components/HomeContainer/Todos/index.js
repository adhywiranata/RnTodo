import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return (
      <ScrollView>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(todo => (
            <TodoItem key={todo} todoTask={'asd'} />
          ))
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  todoItem: {
    height: 50,
    padding: 10,
  }
});

export default Todos;
