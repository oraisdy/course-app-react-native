import React, { Component } from 'react';
import { Container, Content, Card, Header,Item,Input,CardItem,Badge, Left,Image,Grid,Col,Text, Body,Icon,Right,Button } from 'native-base';

export default class Courses extends Component {
    render(){
        return (
            <Container>
                <Content>
                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Search" />
                        </Item>
                        {/*<Button transparent>
                            <Text>Search</Text>
                        </Button>*/}
                    </Header>
                    <Card>
                        <CardItem>
                            <Left>
                                <Badge primary>
                                    <Text>R</Text>
                                </Badge>
                                <Body>
                                    <Text>软件工程</Text>
                                    <Text note>刘钦</Text>
                                </Body>
                            </Left>
                          </CardItem>
                          {/*<CardItem cardBody>
                              <Text>....</Text>
                          </CardItem>*/}
                          <CardItem>
                              <Grid>
                                <Col>
                                    <Button transparent>
                                        <Icon active name="paper" />
                                        <Text>作业</Text>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button transparent>
                                        <Icon active name="flask" />
                                        <Text>练习</Text>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button transparent>
                                        <Icon active name="podium" />
                                        <Text>考试</Text>
                                    </Button>
                                </Col>
                            </Grid>
                             
        
                        </CardItem>
                   </Card>
                </Content>
            </Container>  
        );
    }
} 