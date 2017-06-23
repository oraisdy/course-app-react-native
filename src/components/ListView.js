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
  Button,
  List,
  Grid,
  Col,
  ListItem
} from "native-base";
import { TouchableOpacity, View } from "react-native";
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
    return (
      <Container>
        <Content>
          <List
            dataArray={this.state.tasks}
            renderRow={task =>
              <ListItem>
                <Body>
                  <TouchableOpacity
                    onPress={() => Actions.assignment({ task: task })}
                  >
                    <Grid style={{ alignItems: "center" }}>
                      <Col size={1}>
                        <Icon
                          active
                          name="paper"
                          style={{ fontSize: 32, width: 32 }}
                        />
                      </Col>
                      <Col size={8}>
                        <Text style={{ fontSize: 20 }}>{task.title}</Text>
                        <Text note>{task.description}</Text>
                      </Col>
                      <Col size={4}>
                        <Badge success>
                          <Text>{statusDict[task.status]}</Text>
                        </Badge>
                      </Col>
                    </Grid>
                    <CardItem>
                      <Body>
                        <Grid>
                          <Col size={5}>
                            <Text note>开始时间</Text>
                            <Text style={{ margin: 4 }}>
                              {task.startAt.slice(0, 16)}
                            </Text>
                          </Col>
                          <Col
                            style={{
                              borderRightColor: '#eee',
                              borderRightWidth: 1,
                              marginRight: 30
                            }}
                          />
                          <Col size={5}>
                            <Text note>结束时间</Text>
                            <Text style={{ margin: 4 }}>
                              {task.endAt.slice(0, 16)}
                            </Text>
                          </Col>
                        </Grid>
                      </Body>
                    </CardItem>
                  </TouchableOpacity>
                </Body>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

const statusDict = {
  newly: "新建态",
  initing: "正在初始化",
  initFail: "初始化失败",
  initSuccess: "初始化成功",
  ongoing: "正在考试",
  timeup: "考试结束",
  analyzing: "正在分析结果",
  analyzingFinish: "结果分析完毕"
};
