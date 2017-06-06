/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Login from './src/pages/Login';

export default class TSSReactNative extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('TSSReactNative', () => TSSReactNative);
