import React, { Component } from "react";
import { StyleSheet, Text, Platform } from "react-native";
import { Container, Icon, Button } from "native-base";
import { Scene, Router, Actions } from "react-native-router-flux";
import Login from "../pages/Login";
import { Exercises, Exams, Assignments } from "../pages/Tasks";
import Courses from "../pages/Courses";
import Assignment from "../pages/Assignment";
import Tab from "../components/Footer";
import NavBar from "../components/Header";
import Group from "../pages/Group";
import Student from "../pages/Student";

class Root extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Scene key="login" component={Login} initial title="登录" hideNavBar />
          {/*<Scene key="root">*/}

          <Scene key="student_page">
            <Scene
              key="student_tabs"
              tabs
              tabBarStyle={{ backgroundColor: "#eee" }}
              tabBarSelectedItemStyle={{ backgroundColor: "#ddd" }}
            >
              <Scene
                key="courses"
                component={Courses}
                title="课程"
                icon={() => <Icon name="bookmarks" />}
              />
              <Scene
                key="student_task"
                component={Assignments}
                title="作业"
                icon={() => <Icon name="paper" />}
              />
              <Scene
                key="student_exercise"
                component={Exercises}
                title="练习"
                icon={() => <Icon name="flask" />}
              />
              <Scene
                key="student_exam"
                component={Exams}
                title="考试"
                icon={() => <Icon name="podium" />}
              />
            </Scene>
            <Scene key="student_assignment" component={Assignment} title="作业" />
          </Scene>

          <Scene key="teacher_page">
            <Scene
              key="teacher_tabs"
              tabs
              tabBarStyle={{ backgroundColor: "#eee" }}
              tabBarSelectedItemStyle={{ backgroundColor: "#ddd" }}
            >
              <Scene
                key="group"
                title="群组"
                component={Group}
                icon={() => <Icon name="people" />}
              />

              <Scene
                key="teacher_task"
                component={Assignments}
                title="作业"
                icon={() => <Icon name="paper" />}
              />
              <Scene
                key="teacher_exercise"
                component={Exercises}
                title="练习"
                icon={() => <Icon name="flask" />}
              />
              <Scene
                key="teacher_exam"
                component={Exams}
                title="考试"
                icon={() => <Icon name="podium" />}
              />
            </Scene>
            <Scene key="student" component={Student} title="学生列表" />
            <Scene key="teacher_assignment" component={Assignment} title="作业" />
          </Scene>

          {/*</Scene>*/}
        </Router>

      </Container>
    );
  }
}

export default Root;
