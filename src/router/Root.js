import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";
import { Scene, Router, Actions } from "react-native-router-flux";
import Login from "../pages/Login";
import Tasks from "../pages/Tasks";
import Courses from "../pages/Courses";
import Exercises from "../pages/Exercises";
import Exams from "../pages/Exams";
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
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="student" component={Student} title="" hideNavBar />
            <Scene key="login" component={Login} title="登录" hideNavBar />
            <Scene key="group" component={Group} initial title="群组" hideNavBar />
            <Scene key="task" component={Tasks} title="作业" hideNavBar />
            <Scene key="exercise" component={Exercises} title="练习" hideNavBar/>
            <Scene key="exam" component={Exams} title="考试" hideNavBar/>
            <Scene key="courses" component={Courses} title="课程" />
            <Scene key="assignment" component={Assignment} title="作业" hideNavBar />
          </Scene>
        </Router>
        {/*</Content>  */}
        <TabBar />
      </Container>
    );
  }
}

export default Root;
