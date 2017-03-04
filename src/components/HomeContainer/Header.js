import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const Header = props => (
  <View style={styles.header}>
    <Text style={styles.headerText}>BORING TODOS</Text>
    <TouchableHighlight
      underlayColor='#96281B'
      style={styles.logoutButton}
      onPress={props.logout}>
      <Text style={styles.logoutButtonText}>Logout</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#96281B',
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    right: 13,
    top: 23,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Header;
