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
    <Text style={styles.todoItemTask}>{props.todoTask}</Text>
    <TouchableHighlight onPress={() => props.completeTask(props.id)} style={styles.checkImageButton}>
      <Image source={checkImage} style={styles.checkImage} />
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  todoItem: {
    padding: 30,
    borderTopWidth: 1,
    borderTopColor: '#EB9532',
    borderBottomWidth: 1,
    borderBottomColor: '#EB9532',
    borderLeftWidth: 20,
    borderLeftColor: '#EB9532',
    marginTop: 10,
  },
  todoItemTask: {
    color: '#333333',
    fontSize: 18,
  },
  checkImageButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 40,
    height: 40,
    padding: 0,
  },
  checkImage: {
    width: 40,
    height: 40,
  }
});

export default TodoItem;
