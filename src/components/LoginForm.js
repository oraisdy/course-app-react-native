import React, { Component } from 'react';
import { Container, Content, Form, Item, Input,Label} from 'native-base';
import { Button,Text} from 'native-base';
export default class LoginForm extends Component {
    render() {
        return (
            <Container>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </Form>
                    </Content>
                    <Content>
                        <Button block success>
                            <Text>Success</Text>
                        </Button>
                    </Content>
                </Container>
        );
    }
}