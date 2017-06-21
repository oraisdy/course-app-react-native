import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Icon
} from "native-base";
import update from "react-addons-update";
import request from "../api/request";
import api from "../api/api";

export default class QuestionList extends React.Component {
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
      api.readme,
      data => {
        this.setState({
          questions: update(this.state.questions, {
            0: { readme: { $set: data.content } }
          })
        });
      },
      [this.state.task.id, 227, 26]
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
              <Text>
                描述：{question.description}
              </Text>
              <Text>
                Readme：
                {question.readme}
              </Text>

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
