
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import codePush from 'react-native-code-push';
import firebase from 'react-native-firebase';
import Config from 'react-native-config'
export default class App extends Component {

  componentDidMount = () => {
    alert(Config.API_URL);
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE
    });
    this.pushNotificationConfigure();
  }

  pushNotificationConfigure = async () => {
    await firebase.messaging().hasPermission()
      .then((enabled) => {
        if (enabled) {
          firebase.messaging().getToken()
            .then((fcmToken) => {
              if (fcmToken) {
                alert(fcmToken);
              }else{
                alert('error');
              }
            });
        } else {
          firebase.messaging().requestPermission()
            .then(() => {
              firebase.messaging().getToken()
                .then((fcmToken) => {
                  if (fcmToken) {
                    alert(fcmToken);
                  }else{
                    alert('error');
                  }
                });
            })
            .catch((error) => {
              alert(JSON.stringify(error));
            });
        }
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>We are Life Guard!</Text>
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
