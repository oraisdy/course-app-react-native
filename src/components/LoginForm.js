import React, { Component } from 'react';
import { Container, Content, Form, Item, Input,Label} from 'native-base';
import { Button,Text} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>用户名</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>密码</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
                <Content>
                    <Button block success onPress={Actions.task}>
                        <Text>登录</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}