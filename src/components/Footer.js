import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions} from 'react-native-router-flux';

export default class TabBar extends Component {
    render() {
        return (
           
            <Footer >
                <FooterTab>
                    <Button active onPress={Actions.courses}>
                        <Icon active name="bookmarks" />
                    </Button>
                    <Button onPress={Actions.task}>
                        <Icon name="paper" />
                    </Button>
                    <Button>
                        <Icon name="navigate" />
                    </Button>
                    <Button>
                        <Icon name="person" />
                    </Button>
                </FooterTab>
            </Footer>
            
        );
    }
}