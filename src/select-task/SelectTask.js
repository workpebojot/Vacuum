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
    Card,
    Text,
    CardItem,
    Item,
    Icon,
    Label,
    Input,
    H3,
    Picker
} from 'native-base';
import { BackHandler, Image, Pressable, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Navigation } from 'react-native-navigation';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-picker';
import Location from '.././data/location-data';
import DialogAndroid from 'react-native-dialogs';
import LottieView from 'lottie-react-native';

export default class SelectTask extends React.Component {
    render() {
        return (
            <Grid>
                <Row size={20} style={{ backgroundColor: "#fcc4c3" }}>
                    <Col style={{ justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                        <Title>Select Task</Title>
                    </Col>
                </Row>
                <Row size={60} style={{ backgroundColor: "#fcc4c3" }}>
                    <Col
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            position: "relative",
                            zIndex: -1
                        }}>
                        <LottieView
                            source={require('../assets/animation/lottie/10646-office.json')}
                            style={{ alignSelf: "center" }}
                            ref={animation => {
                                this.task = animation;
                            }}
                            autoSize
                            resizeMode="center" />
                        <Row style={{ position: "absolute", alignSelf: "center", zIndex: 1, flexDirection: "column" }}>
                            <TouchableOpacity
                                onPress={() => Navigation.push(this.props.componentId, {
                                    component: {
                                        name: "FindJob",
                                        passProps: {
                                            props: this.props
                                        }
                                    }
                                })}
                                style={{
                                    flexDirection: "column",
                                    flex: 1,
                                    zIndex: 2,
                                    margin: 10
                                }}>
                                <Col style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#05dee2",
                                    alignContent: "center",
                                    margin: 10,
                                    height: 50,
                                    borderRadius: 5,
                                    opacity: 0.8
                                }}>
                                    <H3 style={{ color: "#ffffff", alignSelf: "center", margin: 10, fontWeight: "bold" }}>Find Job</H3>
                                </Col>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => Navigation.push(this.props.componentId, {
                                    component: {
                                        name: "CreateJob",
                                        passProps: {
                                            props: this.props
                                        }
                                    }
                                })}
                                style={{
                                    flexDirection: "column",
                                    flex: 1,
                                    zIndex: 2,
                                    margin: 10
                                }}>
                                <Col style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#05dee2",
                                    alignContent: "center",
                                    margin: 10,
                                    height: 50,
                                    borderRadius: 5,
                                    opacity: 0.8
                                }}>
                                    <H3 style={{ color: "#ffffff", alignSelf: "center", margin: 10, fontWeight: "bold" }}>Create Job</H3>
                                </Col>
                            </TouchableOpacity>
                        </Row>
                    </Col>
                </Row>
                <Row size={20} style={{ backgroundColor: "#fcc4c3" }}>

                </Row>
            </Grid>
        );
    }

    componentDidMount() {
        // BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        this.task.play();
    }

    /* componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        return true;
    } */
}