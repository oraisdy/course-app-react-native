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
         {/*<Content>*/}
          {/*<NavBar/>*/}
          <Router>
            <Scene key="root" hideNavBar>
              <Scene key="login" component={Login} title="登录" hideNavBar/>
                <Scene key="task" component={Tasks} title="作业" hideNavBar/>
                <Scene key="courses" initial component={Courses} title="课程"/>                 
            </Scene>
          </Router> 
          {/*</Content>  */}
          <TabBar/>
      </Container>
    );
  }
}

export default Root;
