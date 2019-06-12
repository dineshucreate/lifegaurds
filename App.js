
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import codePush from 'react-native-code-push';
export default class App extends Component {
  componentDidMount = () => {
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>We were Life Guard!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
