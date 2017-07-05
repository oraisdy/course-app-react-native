/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root from './src/router/Root';

export default class TSSReactNative extends Component {
  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('TSSReactNative', () => TSSReactNative);
