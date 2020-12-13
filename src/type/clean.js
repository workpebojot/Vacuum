import * as React from 'react';
import {
    Button,
    Card,
    Text,
    CardItem,
    H2
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { TouchableOpacity, Image, LayoutAnimation, UIManager } from 'react-native';
import LottieView from 'lottie-react-native';
import DialogMethod from '..//utilities/method/dialog';

UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Clean extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            value: props.data,
            animation: [props.data]
        }

        this.dialog = new DialogMethod();
    }

    state = {
        expand: [],
        animation: [],
        open: false,
        value: {}
    }

    CleanExpand(condition) {

        if (condition) {
            this.state.open = false;
            this.setState({ open: this.state.open });
            this.state.expand = [];
            this.setState({ expand: this.state.expand });
        } else {
            this.state.open = true;
            this.setState({ open: this.state.open });
            const value = this.state.animation;
            this.state.expand = value;
            this.setState({ expand: this.state.expand })
        }
    }

    CleanNow() {
        this.clean.play();
        setTimeout(() => {
            this.clean.pause()
        }, 3000)
    }

    CleanType(type) {
        switch (type) {
            case "Kitchen":
                return require('../assets/animation/lottie/32854-specific-latent-heat-vaporization-question.json');
            case "Living":
                return require('../assets/animation/lottie/37176-living-room.json');
            case "Wash":
                return require('../assets/animation/lottie/3138-washing-machine.json');
            default:
                break;
        }
    }

    render() {
        return (
            <Card key={this.state.value.key} style={{ borderRadius: 10, elevation: 0 }}>
                <CardItem
                    style={{
                        borderRadius: 10,
                        flexDirection: "column",
                        borderColor: "#fcc4c3",
                        borderWidth: 3
                    }}>
                    <Grid style={{
                        borderBottomColor: "#fcc4c3",
                        borderBottomWidth: 3,
                        borderTopColor: "#05dee2",
                        borderTopWidth: 3,
                        padding: 5
                    }}>
                        <Col style={{
                            padding: 5,
                            backgroundColor: "#e4f7fd",
                            borderRadius: 10
                        }}>
                            <Row style={{ margin: 5 }}>
                                <Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                    <LottieView
                                        source={this.CleanType(this.state.value.name)}
                                        style={{ width: 50, height: 50 }}
                                        autoPlay
                                        ref={animation => {
                                            const animated = animation;
                                            if (animated !== null) {
                                                animated.play()
                                                setTimeout(() => {
                                                    animated.pause()
                                                }, 2000)
                                            }
                                        }} />
                                </Col>
                                <Col size={80} style={{
                                    justifyContent: "center",
                                    backgroundColor: "#fcc4c3",
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                    paddingLeft: 5,
                                    flexDirection: "row"
                                }}>
                                    <Row style={{ alignItems: "center", justifyContent: "center", padding: 10, color: "#ffffff" }}>
                                        <H2>
                                            {this.state.value.name}{" Room"}
                                        </H2>
                                    </Row>
                                    <Row style={{ alignItems: "center", justifyContent: "center", padding: 10, flexDirection: "column", backgroundColor: "#ffffff" }}>
                                        <Col style={{ borderBottomColor: "#fcc4c3", borderBottomWidth: 3, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <LottieView
                                                source={require('../assets/animation/lottie/19995-money-stack.json')}
                                                style={{ width: 50, height: 50 }}
                                                autoPlay
                                                ref={animation => {
                                                    const animated = animation;
                                                    if (animated !== null) {
                                                        animated.play()
                                                        setTimeout(() => {
                                                            animated.pause()
                                                        }, 2000)
                                                    }
                                                }} />
                                            <Text>Bounty</Text>
                                        </Col>
                                        <Col>
                                            <Text>
                                                {this.state.value.reward}{' Pesos'}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ margin: 5 }}>
                                <Col size={20} style={{ justifyContent: "center", alignItems: "center", margin: 5 }}>
                                    <Image
                                        source={this.state.value.image}
                                        style={{ borderRadius: 100, width: 50, height: 50 }} />
                                </Col>
                                <Col size={60} style={{ justifyContent: "center", flexDirection: "row-reverse", margin: 5 }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                            this.CleanExpand(this.state.open)
                                        }}
                                        style={{ flexDirection: "row", flex: 1 }}>
                                        <Row style={{
                                            alignItems: "center",
                                            backgroundColor: "#05dee2",
                                            elevation: 0,
                                            borderColor: "white",
                                            borderBottomColor: "#fcc4c3",
                                            borderBottomWidth: 3,
                                            margin: 5
                                        }}>
                                            <Col style={{ alignItems: "center" }}>
                                                <Text style={{ color: "#ffffff" }}>See More</Text>
                                            </Col>
                                        </Row>
                                    </TouchableOpacity>
                                    <Row style={{ alignItems: "center" }}>
                                        <Text>
                                            {'By '}{this.state.value.author.first}{" "}{this.state.value.author.last}

                                        </Text>
                                    </Row>
                                </Col>
                            </Row>
                            {
                                this.state.expand.length === 0 ? <Text></Text> : (
                                    <>
                                        <Row style={{ backgroundColor: "#e5f8f5", borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                                            <Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                <LottieView
                                                    source={require('../assets/animation/lottie/24189-calendar-date.json')}
                                                    style={{ width: 50, height: 50 }}
                                                    autoPlay
                                                    ref={animation => {
                                                        const animated = animation;
                                                        if (animated !== null) {
                                                            animated.play()
                                                            setTimeout(() => {
                                                                animated.pause()
                                                            }, 2000)
                                                        }
                                                    }} />
                                            </Col>
                                            <Col size={80} style={{ justifyContent: "center" }}>
                                                <Text>
                                                    {this.state.expand[0].date}{' '}{this.state.expand[0].day}
                                                </Text>
                                            </Col>
                                        </Row>
                                        <Row key={2} style={{ backgroundColor: "#e4f7fd" }}>
                                            <Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                <LottieView
                                                    source={require('../assets/animation/lottie/34851-clock-12-hours')}
                                                    style={{ width: 50, height: 50 }}
                                                    autoPlay
                                                    ref={animation => {
                                                        const animated = animation;
                                                        if (animated !== null) {
                                                            animated.play()
                                                            setTimeout(() => {
                                                                animated.pause()
                                                            }, 2000)
                                                        }
                                                    }} />
                                            </Col>
                                            <Col size={80} style={{ justifyContent: "center" }}>
                                                <Text>{this.state.expand[0].hours} Hour Clean</Text>
                                            </Col>
                                        </Row>
                                        <Row key={3} style={{ backgroundColor: "#e5f8f5" }}>
                                            <Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                <LottieView
                                                    source={require('../assets/animation/lottie/11422-travel-icons-map.json')}
                                                    style={{ width: 50, height: 50 }}
                                                    autoPlay
                                                    ref={animation => {
                                                        const animated = animation;
                                                        if (animated !== null) {
                                                            animated.play()
                                                            setTimeout(() => {
                                                                animated.pause()
                                                            }, 2000)
                                                        }
                                                    }} />
                                            </Col>
                                            <Col size={80} style={{ justifyContent: "center" }}>
                                                <Text>
                                                    {this.state.expand[0].location}
                                                </Text>
                                            </Col>
                                        </Row>
                                        <TouchableOpacity key={4} onPress={() => this.dialog.topicDescriptionAndTaskDialogMethod(this.state.value)}>
                                            <Row style={{ backgroundColor: "#e4f7fd", borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                                                <Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                    <LottieView
                                                        source={require('../assets/animation/lottie/20542-bag-with-stuff.json')}
                                                        style={{ width: 50, height: 50 }}
                                                        autoPlay
                                                        ref={animation => {
                                                            const animated = animation;
                                                            if (animated !== null) {
                                                                animated.play()
                                                                setTimeout(() => {
                                                                    animated.pause()
                                                                }, 2000)
                                                            }
                                                        }} />
                                                </Col>
                                                <Col size={80} style={{ justifyContent: "center" }}>
                                                    <Text>Task</Text>
                                                </Col>
                                            </Row>
                                        </TouchableOpacity>
                                    </>
                                )
                            }
                        </Col>
                    </Grid>
                    <Grid style={{ margin: 10 }}>
                        <Col
                            size={40}
                            style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}>

                            <TouchableOpacity onPress={() => this.CleanNow()}>
                                <LottieView
                                    source={require('../assets/animation/lottie/8489-clean.json')}
                                    style={{ width: 50, height: 50 }}
                                    ref={animation => {
                                        this.clean = animation;
                                    }} />
                            </TouchableOpacity>
                        </Col>
                        <Col size={20}>
                            <Text></Text>
                        </Col>
                        <Col size={40}>
                            <Button block transparent style={{ elevation: 0 }}>
                                <Text style={{ borderBottomColor: "#05dee2", borderBottomWidth: 3 }}>
                                    <Text style={{ color: "#000000" }}>{this.state.value.cleaner} Cleaner</Text>
                                </Text>
                            </Button>
                        </Col>
                    </Grid>
                </CardItem>
            </Card>
        );
    }
}