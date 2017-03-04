import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import TodoItem from './TodoItem';

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, todoTask: 'Learn React', completed: false },
        { id: 2, todoTask: 'Learn Redux', completed: false },
        { id: 3, todoTask: 'Learn React Native', completed: false },
        { id: 4, todoTask: 'Learn React Router', completed: false },
        { id: 5, todoTask: 'Learn React Native Navigator', completed: false },
        { id: 6, todoTask: 'Learn AWS S3', completed: false },
        { id: 7, todoTask: 'Learn AWS EC2', completed: false },
        { id: 8, todoTask: 'Learn React Testing', completed: false },
        { id: 9, todoTask: 'Learn Express', completed: false },
        { id: 10, todoTask: 'Learn Jekyll', completed: false },
        { id: 11, todoTask: 'Learn Rails', completed: false },
        { id: 12, todoTask: 'Learn PHP', completed: false },
        { id: 13, todoTask: 'Learn Laravel', completed: false },
      ]
    }
  }
  render() {
    return (
      <ScrollView>
        {
          this.state.todos.map(todo => (
            <TodoItem key={todo.id} {...todo} />
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
