import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const TodoItem = props => (
  <View style={styles.todoItem}>
    <Text style={styles.todoItemTask}>{props.todoTask}</Text>
  </View>
);

const styles = StyleSheet.create({
  todoItem: {
    padding: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  todoItemTask: {
    color: '#333333',
  }
});

export default TodoItem;
