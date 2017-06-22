import React, { Component } from "react";
import { Dimensions } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon
} from "native-base";
import { Button, Text } from "native-base";
import { Actions } from "react-native-router-flux";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      handleLogin: this.handleLogin.bind(this)
    };
  }

  handleLogin() {
    this.props.onLogin(this.state.username, this.state.password);
  }

  render() {
    const { height: screenHeight } = Dimensions.get("window");
    return (
      <Container style={{ padding: 10 }}>
        <Content>
          <Icon
            name="analytics"
            style={{
              fontSize: 80,
              alignSelf: "center",
              paddingTop: screenHeight / 8,
              color: "steelblue",
              alignItems: "center"
            }}
          />

          <Form style={{height:screenHeight/3}}>
            <Item floatingLabel>
              <Label>用户名</Label>
              <Input
                value={this.state.username}
                onChangeText={e => this.setState({ username: e })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>密 码</Label>
              <Input
                value={this.state.password}
                onChangeText={e => this.setState({ password: e })}
              />
            </Item>
          </Form>
    
          <Button block primary onPress={this.state.handleLogin}>
            <Text>登 录</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
