import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

class Todos extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.todoItem}>
          <Text>ToDo 1</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  todoItem: {
    height: 50,
  }
});

export default Todos;
