import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import checkImage from './success.png';

const TodoItem = props => (
  <View style={styles.todoItem}>
    <TouchableHighlight
      onPress={() => props.selectTask(props.id)}
      style={styles.todoItemTask}
      underlayColor='#FFFFFF'>
      <Text style={styles.todoItemTaskText}>{props.todoTask}</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => props.completeTask(props.id)} style={styles.checkImageButton}>
      <Image source={checkImage} style={styles.checkImage} />
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  todoItem: {
    height: 90,
    padding: 0,
    borderTopWidth: 1,
    borderTopColor: '#rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  todoItemTask: {
    padding: 30,
    backgroundColor: '#FFF'
  },
  todoItemTaskText: {
    color: '#333333',
    fontSize: 15,
  },
  checkImageButton: {
    position: 'absolute',
    right: 20,
    top: 10,
    width: 60,
    height: 60,
    padding: 0,
  },
  checkImage: {
    width: 60,
    height: 60,
  }
});

export default TodoItem;
