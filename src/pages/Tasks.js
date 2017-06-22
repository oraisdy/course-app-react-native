import React, { Component } from "react";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";

import request from "../api/request";
import api from "../api/api";
import ListView from "../components/ListView";

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primitive: [],
      tasks: [],
      keyword: "",
      type: props.taskType
    };
  }
  componentDidMount() {
    this.requestData();
  }
  requestData() {
    request.get(
      api[this.state.type],
      data => {
        this.setState({ primitive: data, tasks: data });
      },
      [2]
    );
  }
  render() {
    return (
      <Container>
        <Header searchBar backgroundColor="#eee">
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              value={this.state.keyword}
              onChangeText={e =>
                this.setState({
                  keyword: e,
                  tasks: this.state.primitive.filter(
                    task =>
                      task.title.includes(e) ||
                      (task.description && task.description.includes(e))
                  )
                })}
            />
            <Icon
              name="ios-close"
              onPress={e => this.setState({ keyword: "", tasks: this.state.primitive })}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <ListView tasks={this.state.tasks} />
      </Container>
    );
  }
}
