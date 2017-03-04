import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableHighlight,
} from 'react-native';

import checkImage from './success.png';
import trashImage from './delete.png';

const ActiveTodoItem = props => (
  <View style={styles.todoItem}>
    <TouchableHighlight style={styles.trashImageButton}>
      <Image source={trashImage} style={styles.trashImage} />
    </TouchableHighlight>
    <TextInput
      style={styles.todoItemTaskInput}
      onEndEditing={(e) => props.updateTask(props.id, e.nativeEvent.text)}
      defaultValue={props.todoTask} />
    <TouchableHighlight onPress={() => props.completeTask(props.id)} style={styles.checkImageButton}>
      <Image source={checkImage} style={styles.checkImage} />
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  todoItem: {
    height: 100,
    padding: 20,
    marginTop: 10,
    backgroundColor: '#F0F0F0',
    borderTopWidth: 1,
    borderTopColor: '#rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    flex: 1,
    flexDirection: 'row',
  },
  todoItemTaskInput: {
    color: '#333',
    fontSize: 15,
    width: '60%',
  },
  checkImageButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 60,
    height: 60,
    padding: 0,
  },
  checkImage: {
    width: 60,
    height: 60,
  },
  trashImageButton: {
    width: 50,
    height: 50,
    padding: 0,
    marginLeft: 0,
    marginRight: 10,
  },
  trashImage: {
    width: 50,
    height: 50,
  }
});

export default ActiveTodoItem;
