
import * as React from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Text,
    Item,
    Input,
    Label,
    Card,
    CardItem,
    H3,
    Icon,
    Footer,
    FooterTab
} from 'native-base';
import { Image, TouchableOpacity, Pressable } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SignUp extends React.Component {
    render() {
        return (
            <Grid style={{ backgroundColor: "#fcc4c3" }}>
                <Row size={20} style={{ backgroundColor: "#fcc4c3" }}>
                    <Col style={{
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center"
                    }}>
                        <TouchableOpacity
                            onPress={
                                () => Navigation.pop(this.props.componentId)
                            }
                            style={{
                                alignSelf: "flex-start",
                                marginLeft: 20
                            }}>
                            <Title style={{ fontSize: 16 }}>Back</Title>
                        </TouchableOpacity>
                    </Col>
                    <Col style={{
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center"
                    }}>
                        <TouchableOpacity>
                            <Title style={{ fontSize: 20 }}>Login</Title>
                        </TouchableOpacity>
                    </Col>
                    <Col
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center"
                        }}>
                        <TouchableOpacity
                            onPress={
                                () => Navigation.pop(this.props.componentId)
                            }
                            style={{
                                alignSelf: "flex-end",
                                marginRight: 20
                            }}>
                            <Title style={{ fontSize: 16 }}>Vacuum</Title>
                        </TouchableOpacity>
                    </Col>
                </Row>
                <Row size={60} style={{ backgroundColor: "#fcc4c3" }}>
                    <Col
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            backgroundColor: "#ffffff",
                            margin: 10,
                            borderRadius: 5,
                            padding: 10
                        }}>

                        <Item floatingLabel>
                            <Icon type="MaterialIcons" name='email' />
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Icon name='lock-closed' />
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Text>
                            {'\n'}
                        </Text>
                        <Button
                            onPress={
                                () => Navigation.push(this.props.componentId, {
                                    component: {
                                        name: "Home"
                                    }
                                })
                            }
                            rounded
                            block
                            style={{
                                backgroundColor: "#FCC4C3",
                                elevation: 0
                            }}>
                            <H3 style={{ color: "#FFFFFF" }}>Login</H3>
                        </Button>
                    </Col>
                </Row>
                <Row size={20} style={{ backgroundColor: "#fcc4c3", justifyContent: "center" }}>

                    <Button transparent block style={{ elevation: 0, alignSelf: 'flex-end' }}>
                        <Text style={{ color: "#ffffff", fontSize: 12.5 }}>Vacuum Version 1.0.0 2020-2021</Text>
                    </Button>
                </Row>
            </Grid>
        );
    }
}