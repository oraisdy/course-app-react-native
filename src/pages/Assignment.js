import React from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text
} from "native-base";
import update from "react-addons-update";
import request from "../api/request";
import api from "../api/api";
import Questions from "./Questions";
import Analysis from "./Analysis";
import Results from "./Result";

export default class Assignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task
    };
  }

  componentDidMount() {
    // this.requestData();
  }

  render() {
    var analysis = global.role === "student"
      ? <Results task={this.state.task} student={global.id}/>
      : <Analysis task={this.state.task} />;
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab
            heading={
              <TabHeading><Icon name="bulb" /><Text>题目</Text></TabHeading>
            }
          >
            <Questions task={this.state.task} />
          </Tab>

          <Tab
            heading={
              <TabHeading><Icon name="pie" /><Text>分析</Text></TabHeading>
            }
          >
            {analysis}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
