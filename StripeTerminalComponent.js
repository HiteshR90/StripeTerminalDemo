import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import readerAPI from './reader';

export default class StripeTerminalComponent extends Component {
  

  connectReader = () => {
    readerAPI.connectReader()
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.connectReader}>
          <Text>Connect readers</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});