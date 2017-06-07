import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import {Scene, Router, Actions} from 'react-native-router-flux';
import Login from '../pages/Login';
import Tasks from '../pages/Tasks';
import Courses from '../pages/Courses';
import TabBar from '../components/Footer';

class Root extends Component {
  render() {
    return (
      <Container>
          <Router>
            <Scene key="root">
              <Scene key="login" component={Login} hideNavBar title="Login"/>
                <Scene key="task" icon={TabIcon} component={Tasks} initial title="Tasks"/>
                <Scene key="courses" icon={TabIcon} component={Courses} title="Courses"/>                 
            </Scene>
          </Router>     
          <Footer>
              <FooterTab>
                  <Button>
                      <Icon name="apps" />
                  </Button>
                  <Button onPress={Actions.task}>
                      <Icon name="paper" />
                  </Button>
                  <Button active>
                      <Icon active name="navigate" />
                  </Button>
                  <Button>
                      <Icon name="person" />
                  </Button>
              </FooterTab>
          </Footer>
      </Container>
    
    );
  }
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#ffffff',
    },
    tabBarSelectedItem: {
        backgroundColor: '#ffffff',
    },

    tabBarSelectedTitle: {
        color: '#06C1AE',
    },
    tabBarUnselectedTitle: {
        color: '#979797',
    },

    tabBarSelectedImage: {
        tintColor: '#06C1AE',
    },
    tabBarUnselectedImage: {
        tintColor: '#979797'
    },

    navigationBarStyle: {
        backgroundColor: 'white'
    },
    navigationBarTitle: {
        color: '#333333'
    },
    navigationBarButtonIcon: {
        tintColor: '#06C1AE'
    },
});

export default Root;

class TabIcon extends React.Component {
    render(){
        return (
            <Text>122</Text>
        );
    }
}