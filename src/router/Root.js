import React, { Component } from "react";
import { StyleSheet,Platform } from "react-native";
import { Container } from "native-base";
import { Scene, Router, Actions } from "react-native-router-flux";
import Login from "../pages/Login";
import Tasks from "../pages/Tasks";
import Courses from "../pages/Courses";
import Assignment from "../pages/Assignment";
import TabBar from "../components/Footer";
import NavBar from "../components/Header";
import Group from "../pages/Group";
import Student from "../pages/Student";

class Root extends Component {
  render() {
    return (
      <Container>
        {/*<Content>*/}
        {/*<NavBar/>*/}
        {/*<Login />*/}
        <Router sceneStyle={{paddingTop: (Platform.OS !== 'ios' ? 54 : 64)}}>
          <Scene key="root">
            {/*<Scene key="initial" initial title="登录" hideNavBar />*/}
            <Scene key="login" component={Login}  title="登录" hideNavBar />
            <Scene key="student" component={Student} title="学生列表" />
            <Scene key="group" component={Group} initial title="群组" />
            <Scene key="task" component={Tasks} title="作业" />
            <Scene key="exercise" component={Tasks}  title="练习" />
            <Scene key="exam" component={Exams} title="考试" />
            <Scene key="courses" component={Courses} title="课程" />
            <Scene key="assignment" component={Tasks} title="作业" />
          </Scene>
        </Router>
        {/*</Content>  */}
        <TabBar />
      </Container>
    );
  }
}

export default Root;
