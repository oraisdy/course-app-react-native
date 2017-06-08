import React, { Component } from 'react';
import { Container, Content, Card, Header,Item,Input,CardItem,Badge, Left,Image,Grid,Col,Text, Body,Icon,Right,Button } from 'native-base';
export default class Tasks extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon active name="paper" />
                                <Body>
                                    <Text>软件工程测试1</Text>
                                    <Text note>刘钦</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    开始时间：2017-04-25 16:22
                                </Text>
                                <Text>
                                    结束时间：2017-04-25 16:46
                                </Text>
                                <Badge success>
                                    <Text>正在分析</Text>
                                </Badge>  
                            </Body>
                        </CardItem>
                   </Card>
                </Content>
            </Container>  
        );
    }
}