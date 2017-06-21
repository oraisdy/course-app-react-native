import React, { Component } from "react";
import {
  Container,
  Content,
  Card,
  Header,
  Item,
  Input,
  CardItem,
  Badge,
  Left,
  Text,
  Body,
  Icon,
  Right,
  Button
} from "native-base";
import { Actions } from "react-native-router-flux";

export default class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tasks: nextProps.tasks
    });
  }

  render() {
    var Cards = this.state.tasks.map(task => {
      return (
        <Card key={task.id}>
          <Button
            transparent
            onPress={() => Actions.assignment({ id: task.id })}
          >
            <CardItem>
              <Left>
                <Icon active name="paper" />
                <Body>
                  <Text>{task.title} {task.id}</Text>
                  <Text note>刘钦</Text>
                </Body>
              </Left>
            </CardItem>
          </Button>
          <CardItem>
            <Body>
              <Text>
                {task.description}
              </Text>
              <Text>
                开始时间：{task.startAt}
              </Text>
              <Badge success>
                <Text>{task.status}</Text>
              </Badge>
            </Body>
          </CardItem>
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
