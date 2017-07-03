import React, { Component } from "react";
import { StyleSheet, Text, Platform } from "react-native";
import { Container, Icon, Button, StyleProvider } from "native-base";
import { Scene, Router, Actions } from "react-native-router-flux";
import Login from "../pages/Login";
import { Exercises, Exams, Assignments } from "../pages/Tasks";
import Courses from "../pages/Courses";
import Assignment from "../pages/Assignment";
import Tab from "../components/Footer";
import NavBar from "../components/Header";
import Group from "../pages/Group";
import Student from "../pages/Student";
import Color from "../../native-base-theme/variables/commonColor";

class Root extends Component {
  render() {
    return (
      <Container>
        <Router
          navigationBarStyle={{
            backgroundColor: Color.segmentBackgroundColor
          }}
          titleStyle={{ color: "#FFF" }}
          barButtonTextStyle={{
            color: "#FFF"
          }}
          barButtonIconStyle={{
            tintColor: "#FFF"
          }}
        >
          <Scene key="login" component={Login} initial title="登录" hideNavBar />
          <Scene key="student_page">
            <Scene
              key="student_tabs"
              tabs
              tabBarStyle={{
                backgroundColor: Color.segmentBackgroundColor
              }}
              tabBarSelectedItemStyle={{
                backgroundColor: Color.segmentBackgroundColor
              }}
            >
              <Scene
                key="courses"
                component={Courses}
                title="课程"
                style={{ paddingTop: Platform.OS !== "ios" ? 54 : 64 }}
                icon={() =>
                  <Icon name="bookmarks" style={{ color:"#FFF" }} />}
              />
              <Scene
                key="student_task"
                component={Assignments}
                title="作业"
                style={{ paddingTop: Platform.OS !== "ios" ? 54 : 64 }}
                icon={() => <Icon name="paper" style={{ color:"#FFF" }} />}
              />
              <Scene
                key="student_exercise"
                component={Exercises}
                title="练习"
                style={{ paddingTop: Platform.OS !== "ios" ? 54 : 64 }}
                icon={() => <Icon name="flask" style={{ color:"#FFF" }} />}
              />
              <Scene
                key="student_exam"
                component={Exams}
                title="考试"
                style={{ paddingTop: Platform.OS !== "ios" ? 54 : 64 }}
                icon={() => <Icon name="podium" style={{ color:"#FFF" }} />}
              />
            </Scene>
            <Scene
              key="student_assignment"
              component={Assignment}
              title="作业"
              style={{ paddingTop: Platform.OS !== "ios" ? 54 : 64 }}
              navigationBarStyle={{
                backgroundColor: Color.segmentBackgroundColor
              }}
            />
          </Scene>

          <Scene key="teacher_page">
            <Scene
              key="teacher_tabs"
              tabs
              tabBarStyle={{
                backgroundColor: Color.segmentBackgroundColor
              }}
              tabBarSelectedItemStyle={{
                backgroundColor: Color.segmentBackgroundColor
              }}
            >
              <Scene
                key="group"
                title="群组"
                component={Group}
                style={{ paddingTop: Platform.OS !== "ios" ? 54 : 64 }}
                icon={() => <Icon name="people" style={{ color:"#FFF" }} />}
              />

              <Scene
                key="teacher_task"
                component={Assignments}
                style={{ paddingTop: Platform.OS !== "ios" ? 54 : 64 }}
                title="作业"
                icon={() => <Icon name="paper" style={{ color:"#FFF" }} />}
              />
              <Scene
                key="teacher_exercise"
                component={Exercises}
                title="练习"
                style={{ paddingTop: Platform.OS !== "ios" ? 54 : 64 }}
                icon={() => <Icon name="flask" style={{ color:"#FFF" }} />}
              />
              <Scene
                key="teacher_exam"
                component={Exams}
                title="考试"
                style={{ paddingTop: Platform.OS !== "ios" ? 54 : 64 }}
                icon={() => <Icon name="podium" style={{ color:"#FFF" }} />}
              />
            </Scene>
            <Scene key="student" component={Student} title="学生列表" />
            <Scene key="teacher_assignment" component={Assignment} title="作业" />
          </Scene>
        </Router>
      </Container>
    );
  }
}

export default Root;
