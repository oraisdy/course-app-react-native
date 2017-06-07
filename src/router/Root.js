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
                <Scene key="task" component={Tasks} title="Tasks"/>
                <Scene key="courses" component={Courses} initial title="Courses"/>                 
            </Scene>
          </Router>     
          <TabBar/>
      </Container>
    
    );
  }
}

export default Root;
