import React from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from "native-base";

import api from "../api/api";
import request from "../api/request";

export default class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: props.group,
      students: []
    };
  }

  componentDidMount() {
    this.requestData();
  }

  requestData() {
      
    request.get(
      api.students,
      (data) => {
        this.setState({ students: data });
      },
      [this.state.group.id]
    );
  }

  render() {
    //   console.error(this.state.students);
      var Students = this.state.students.map((student)=>(
          <ListItem avatar key={student.id}>
              <Left>
                <Thumbnail source={{ uri: "Image URL" }} />
              </Left>
              <Body>
                <Text>{student.name}</Text>
                <Text note>
                  {student.id}
                </Text>
              </Body>
              {/*<Right>
                <Text note>3:43 pm</Text>*/}
              {/*</Right>*/}
            </ListItem>
      ));
    /*return (
      <Container>
        <Content>
          <List>
            {Students}
          </List>
        </Content>
      </Container>
    );*/

    // var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <Container>
        <Content>
          <List dataArray={this.state.students}
            renderRow={(student) =>
              <ListItem>
                <Body>
                <Text>{student.name}</Text>
                <Text note>
                  {student.id}
                </Text>
                </Body>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}
