import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Icon,List,ListItem
} from "native-base";
import update from "react-addons-update";
import request from "../api/request";
import api from "../api/api";

export default class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task,
      questions: props.task.questions
    };
  }

  componentDidMount() {
    this.requestData();
  }

  requestData() {
    request.get(
      api.scores,
      data => {
        this.setState({
          questions: update(this.state.questions, {
            0: { scores: { $set: (data.questions)[0].students } }
          })
        });
      },
      [38]
    );
  }

  render() {
    var Cards = this.state.questions.map(question => {
      return (
        <Card key={question.id}>

          <CardItem>
            <Left>
              <Icon active name="paper" />
              <Body>
                <Text>{question.title} {question.id}</Text>
                <Text note>难度：{question.difficulty}</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Body>
              <List dataArray={question.scores}
            renderRow={(item) =>
              <ListItem>
                <Text>{item.score}</Text>
              </ListItem>
            }>
          </List>

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
