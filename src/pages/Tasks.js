import React, { Component } from "react";
import request from "../api/request";
import api from "../api/api";
import ListView from "../components/ListView"

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks:[]
    };
  }
  componentDidMount() {
    this.requestData();
  }
  requestData() {
    request.get(
      api.homeworks,
      (data) => {
        this.setState({ tasks: data });
      },
      [2]
    );
  }
  render() {

    return (
      <ListView tasks={this.state.tasks} />
    );
  }
}
