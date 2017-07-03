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
import BarChart from "../components/BarChart";
import update from "react-addons-update";
import request from "../api/request";
import api from "../api/api";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task,
      questions: props.task.questions,
      student: props.student,
      questionResults: []
    };
  }

  componentDidMount() {
    this.requestData();
  }

  requestData() {
    request.get(
      api.analysis,
      data => {
        var questionResults = [];
        data.questionResults.map((ques, index) => {
          questionResults.push(ques);
        });
        this.setState({
          questionResults: questionResults
        });
      },
      [38, 256] //this.state.task.id
    );
  }

  render() {
    var Cards = this.state.questionResults.map((res, index) => {
      return (
        <Card key={res.questionId}>

          <CardItem>
            <Left>
              <Icon active name="paper" />
              <Body>
                <Text>{res.questionTitle}</Text>
                {/*<Text note>难度：{question.difficulty}</Text>*/}
              </Body>
            </Left>
          </CardItem>

          <CardItem>
            <Body>
              <List
                dataArray={res.testResult.testCases}
                renderRow={item =>
                  <ListItem>
                    <Text>{item.name}</Text>
                  </ListItem>}
              />
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
