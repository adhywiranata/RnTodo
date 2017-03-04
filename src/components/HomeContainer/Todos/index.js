import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import TodoItem from './TodoItem';
import ActiveTodoItem from './ActiveTodoItem';

import loadingGif from './rolling.gif';
import logo from './checked.png';
import trash from './trash.png';

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      loading: 'Loading',
      activeTodoId: 2,
    };
    this.completeTask = this.completeTask.bind(this);
    this.selectTask = this.selectTask.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: 'Loading...',
      });
    }, 500);

    setTimeout(() => {
      this.setState({
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
        ],
      });
    }, 1000);
  }

  selectTask(todoId) {
    this.setState({
      activeTodoId: todoId
    });
  }

  completeTask(todoId) {
    let currTodos = [...this.state.todos];
    const currTodosId = currTodos.map(todo => todo.id);
    const deletedTodoId = currTodosId.indexOf(todoId);
    currTodos.splice(deletedTodoId, 1);
    this.setState({
      todos: currTodos,
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.state.todos.length === 0 ? (
            <View style={{ alignItems: 'center'}}>
              <Image source={logo} style={{width: 100, height: 100, marginTop: 50}} />
              <Text style={styles.todoLoading}>{this.state.loading}</Text>
            </View>
          )
          : true }

        {
          this.state.todos
            .filter(todo => !todo.completed)
            .map(todo => todo.id !== this.state.activeTodoId ?
                <TodoItem
                  key={todo.id}
                  selectTask={this.selectTask}
                  completeTask={this.completeTask}
                  {...todo}
                /> :
                <ActiveTodoItem
                  key={todo.id}
                  completeTask={this.completeTask}
                  {...todo}
                />
            )
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    height: 1000,
  },
  todoLoading: {
    fontSize: 35,
    textAlign: 'center',
    padding: 20,
    marginTop: 10,
  },
  todoItem: {
    height: 50,
    padding: 10,
  }
});

export default Todos;
