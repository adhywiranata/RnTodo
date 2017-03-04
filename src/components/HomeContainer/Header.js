import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>BORING TODOS</Text>
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
  }
});

export default Header;
