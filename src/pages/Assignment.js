import React from "react";
import { Text } from "native-base";
import request from "../api/request"
import api from "../api/api"

export default class Assignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      readme:""
    };
  }

  componentDidMount() {
    request.get(
      api.readme,
      (data) => {
        this.setState({ readme: data.content });
      },
      [this.state.id,227,26]
    );
  }

  requestData() {
    
  }

  render() {
    return <Text>{this.state.readme}</Text>;
  }
}
