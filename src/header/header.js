import { Navigation } from 'react-native-navigation';
import * as React from 'react';
import {
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Text
} from 'native-base';
import { Pressable } from 'react-native';

export default class Head extends React.Component {
    render() {
        return (
            <Header
                androidStatusBarColor="#05dee2"
                noLeft
                transparent>
                <Left style={{ flex: 1, margin: 10 }}>
                    <Pressable
                        android_ripple={{ color: "#fcc4c3", borderless: true }}
                        onPress={
                            () => Navigation.push(this.props.componentId, {
                                component: {
                                    name: "Login"
                                }
                            })
                        }>
                        <Text style={{ color: "white" }}>
                            Login
                        </Text>
                    </Pressable>
                </Left>
                <Body style={{ flex: 1 }}>
                    <Button transparent block>
                        <Title>Vacuum</Title>
                    </Button>
                </Body>
                <Right style={{ flex: 1, margin: 10 }}>
                    <Pressable
                        android_ripple={{ color: "#fcc4c3", borderless: true }}
                        onPress={
                            () => Navigation.push(this.props.componentId, {
                                component: {
                                    name: "SignUp"
                                }
                            })
                        }>
                        <Text style={{ color: "white" }}>
                            Signup
                        </Text>
                    </Pressable>
                </Right>
            </Header>
        );
    }
}