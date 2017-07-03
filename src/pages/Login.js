import React, { Component } from "react";
import { Container, Content, Button, Text } from 'native-base';

import LoginForm from "../components/LoginForm";
import request from "../api/request";
import api from "../api/api";
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loadedCookie: false
    };
  }

  onLogin(username, password) {
    var ok;
    var type;
    request.login(api.auth, { username, password }).then(json => {
      if (json) {
        global.role = json.type;
        global.id = json.id;
        if (json.type === "teacher") {
          Actions.teacher_page();
        } else if (json.type === "student") {
          Actions.student_page();
        }
      }
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <LoginForm onLogin={this.onLogin} />
        </Content>
      </Container>
    );
  }
}
