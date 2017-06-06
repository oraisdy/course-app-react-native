import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body,Icon,Right,Button } from 'native-base';
import CourseList from '../components/CourseList';

export default class Courses extends Component {
    render(){
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>软件工程</Text>
                            <Right>
                                <Button transparent primary iconLeft>
                                    <Icon name='person' />
                                    <Text>33</Text>
                                </Button>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    教师：刘钦
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text>作业</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text>练习</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text>考试</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                   </Card>

                   <Card>
                        <CardItem header>
                            <Text>软件工程</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text>作业</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text>练习</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text>考试</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        
         
        );
    }
} 