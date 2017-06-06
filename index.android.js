/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content, Title,Header,Left,Right,Button,Icon,Body,Footer } from 'native-base';

import { AppRegistry } from 'react-native';
import Login from './src/pages/Login';
import Tasks from './src/pages/Tasks';

export default class TSSReactNative extends Component {
  render() {
    return (
      <Container>
          <Header>
              <Left>
                  <Button transparent>
                      <Icon name='menu' />
                  </Button>
              </Left>
              <Body>
                  <Title>课程查询系统</Title>
              </Body>
              <Right />
          </Header>
          <Content>
              <Tasks />
          </Content>
          {/*<Footer>
              <FooterTab>
                  <Button full>
                      <Text>Footer</Text>
                  </Button>
              </FooterTab>
          </Footer>*/}
            </Container>
      
    );
  }
}

AppRegistry.registerComponent('TSSReactNative', () => TSSReactNative);
