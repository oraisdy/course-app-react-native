import React from "react";
import {
  Container,
  Content,
  Header,
  Item,
  Input,
  List,
  ListItem,
  Text,
  Grid,
  Col,
  Left,
  Body,
  Icon,
  Badge,
  Button
} from "native-base";
import { TouchableOpacity, View } from "react-native";
import api from "../api/api";
import request from "../api/request";
import { Actions } from "react-native-router-flux";

export default class Group extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primitive:[],
      groups: [],
      keyword:"",
    };
  }

  componentDidMount() {
    this.requestData();
  }

  requestData() {
    request.get(api.groups, data => {
      this.setState({ primitive:data,groups: data });
    });
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
                  groups: this.state.primitive.filter(
                    g =>
                      g.name.includes(e)
                  )
                })}
            />
            <Icon
              name="ios-close"
              onPress={e => this.setState({ keyword: "", groups: this.state.primitive })}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <List
            dataArray={this.state.groups}
            renderRow={group =>
              <ListItem>
                <Body>
                  <TouchableOpacity
                    onPress={() => Actions.student({ group: group })}
                  >
                    <Grid style={{ alignItems: "center" }}>
                      <Col size={1}>
                        <Icon
                          active
                          name="people"
                          style={{ fontSize: 32, width: 32 }}
                        />
                      </Col>
                      <Col size={8}>
                        <Text style={{ fontSize: 20 }}>{group.name}</Text>
                      </Col>
                    </Grid>

                  </TouchableOpacity>
                </Body>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}
