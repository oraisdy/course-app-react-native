import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Badge, Text, Button, Icon, Left,Right, Body } from 'native-base';
export default class Tasks extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Icon name="paper" />
                                {/*<Thumbnail source={require('./img/NB-logo.png')} />*/}
                                <Body>
                                    <Text>考试1</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Badge success>
                                    <Text>分析已完成</Text>
                                </Badge>
                                <Text note>2017-04-25 16:22 到 2017-04-25 16:46</Text>
                                {/*<Image style={{ resizeMode: 'cover' }} source={require('./img/card-showcase.png')} />*/}
                                
                                <Text>
                                    考试1
                                </Text>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}