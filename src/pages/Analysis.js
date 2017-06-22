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
import BarChart from "../components/BarChart";
import update from "react-addons-update";
import request from "../api/request";
import api from "../api/api";

export default class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task,
      questions: props.task.questions,
      scores: []
    };
  }

  componentDidMount() {
    this.requestData();
  }

  requestData() {
    request.get(
      api.scores,
      data => {
        var scores = [];
        data.questions.map((ques, index) => {
          scores.push(ques.students);
        });
        this.setState({
          scores: scores
        });
      },
      [38] //this.state.task.id
    );
  }

  render() {
    var Cards = this.state.questions.map((question, index) => {
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
              <BarChart data={this.state.scores[index]} />
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
