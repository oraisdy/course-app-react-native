import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Icon,
  Badge,
  Button
} from "native-base";
import api from "../api/api";
import request from "../api/request";
import { Actions } from "react-native-router-flux";

export default class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }

  componentDidMount() {
    this.requestData();
  }

  requestData() {
    request.get(api.groups, data => {
      this.setState({ groups: data });
    });
  }

  render() {
    var Cards = this.state.groups.map(group => {
      return (
        <Card key={group.id}>
          <Button transparent onPress={() => Actions.student({ group: group })}>
            <CardItem>
              <Left>
                <Badge primary>
                  <Text>R</Text>
                </Badge>
                <Body>
                  <Text>{group.name}</Text>
                  {/*<Text note>难度：{question.difficulty}</Text>*/}
                </Body>
              </Left>
            </CardItem>
          </Button>
          {/*<CardItem>
            <Body>
              <Text>
                描述：{question.description}
              </Text>
              <Text>
                Readme：
                {question.readme}
              </Text>

            </Body>
          </CardItem>*/}
        </Card>
      );
    });
    return (
      <Container>
        <Content>
          {Cards}
        </Content>
      </Container>
    );
  }
}
