import React, { Component } from 'react';
import { Container, Content, Text, Left, Body, Right,Title,Button,Icon, Header } from 'native-base';
import { Actions} from 'react-native-router-flux';
import { View} from 'react-native';

export default class TabBar extends Component {
    render() {
        return (
            <View style={{position: 'absolute', top: 0, left: 0, right:0 }}>
               <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                {/*<Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>*/}
                </Header>
            </View>
        );
    }
}

export const menuStyles = {
  view: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    position: 'absolute', //necessary because if no react-native-router-flux will put navbar at bottom ,bug maybe!
    top:0,
    backgroundColor: '#009688',
    elevation:10
  },
 
};