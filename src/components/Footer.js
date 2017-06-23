import React, { Component } from "react";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";
import { Actions } from "react-native-router-flux";

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "teacher",
      current: props.current
    };
  }

  componentWillReceiveProps(nextProps) {
      console.error();
    this.setState({
      current: nextProps.current
    });
  }

  render() {
    var cur = this.state.current;
    var isActive = tab => cur === tab ? {active:true}: {};
    var Tabs = this.state.role === "student"
      ? <FooterTab>
          <Tab
            title="课程"
            onPress={() => {
              {/*this.setState({ current: 'courses' });*/}
              return Actions.courses();
            }}
            icon="bookmarks"
            opts={active("courses")}
          />
          <Button onPress={() => Actions.task({ taskType: "homeworks" })}>
            <Icon name="paper" />
          </Button>
          <Button onPress={() => Actions.exercise({ taskType: "exercises" })}>
            <Icon name="flask" />
          </Button>
          <Button onPress={() => Actions.exam({ taskType: "exams" })}>
            <Icon name="podium" />
          </Button>
        </FooterTab>
      : <FooterTab>
          <Tab
            title="群组"
            onPress={() => {
              {/*this.setState({ current: 'group' });*/}
              return Actions.group();
            }}
            icon="people"
            opts={isActive("group")}
          />
          <Tab
            title="作业"
            onPress={() => {
              {/*this.setState({ current: 'homeworks' });*/}
              return Actions.task({ taskType: "homeworks" });
            }}
            icon="paper"
            opts={isActive('homeworks')}
          />
          <Tab
            title="练习"
            onPress={() => {
              {/*this.setState({ current: 'exercises' });*/}
              return Actions.exercise({ taskType: "exercises" });
            }}
            icon="flask"
            opts={isActive('exercises')}
          />
          <Tab
            title="考试"
            onPress={() => {
              {/*this.setState({ current: 'exams' });*/}
              return Actions.exam({ taskType: "exams" });
            }}
            icon="podium"
            opts={isActive('exams')}
          />
        </FooterTab>;
    return (
      <Footer>
        {Tabs}
      </Footer>
    );
  }
}

export var Tab = ({ title, onPress, icon, opts }) =>
  <Button title={title} onPress={onPress} {...opts}>
    <Icon name="people" {...opts} />
  </Button>;
