import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import {Scene, Router, Actions} from 'react-native-router-flux';
import Login from '../pages/Login';
import Tasks from '../pages/Tasks';
import Courses from '../pages/Courses';
import TabBar from '../components/Footer';
import NavBar from '../components/Header';

class Root extends Component {
  render() {
    return (
       <Container>
          <Router>
            <Scene key="root" navBar={NavBar}>
              <Scene key="login" initial component={Login} title="登录" hideNavBar/>
                <Scene key="task" component={Tasks} title="作业" hideNavBar={false}/>
                <Scene key="courses" component={Courses} title="课程" hideNavBar={false}/>                 
            </Scene>
          </Router>   
          <TabBar/>
      </Container>
    
    );
  }
}

export default Root;
