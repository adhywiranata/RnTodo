import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';

import logo from './checked.png';

const LoginContainer = props => (
  <View style={styles.container}>
    <Image source={logo} style={styles.logo} />
    <Text style={styles.welcome}>RN Boring ToDo New Account</Text>
    <View>
      <TextInput placeholder="Boring username" placeholderTextColor="#DDD" style={styles.loginForm} underlineColorAndroid="transparent"/>
      <TextInput placeholder="Boring email" placeholderTextColor="#DDD" style={styles.loginForm} underlineColorAndroid="transparent"/>
      <TextInput placeholder="Boring password" placeholderTextColor="#DDD" secureTextEntry={true} style={styles.loginForm}/>
      <TextInput placeholder="Boring password confirmation" placeholderTextColor="#DDD" secureTextEntry={true} style={styles.loginForm}/>
      <TouchableHighlight style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Create a New Account</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={props.goToLogin}
        style={styles.toRegisterLink}>
        <Text style={styles.toRegisterLinkText}>Already Have an Account?</Text>
      </TouchableHighlight>
    </View>
  </View>
);

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#96281B',
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 30,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#FFF',
    marginBottom: 30,
  },
  loginForm: {
    width: deviceWidth * 3 / 4,
    height: 50,
    fontSize: 18,
    color: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  loginButton: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  loginButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#96281B',
    fontWeight: 'bold',
  },
  toRegisterLink: {
    marginTop: 20,
    backgroundColor: '#C0392B',
    padding: 10,
  },
  toRegisterLinkText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  }
});

export default LoginContainer;
