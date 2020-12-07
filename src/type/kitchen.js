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

UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Kitchen extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    state = {
        expand: false
    }

    KitchenExpand(condition) {
        if (condition != this.state.expand) {
            this.setState({ expand: true }, () => {
                this.calendar.play();
                this.clock.play();
                this.location.play();
                this.task.play();
                setTimeout(() => {
                    try {
                        this.calendar.pause();
                        this.clock.pause();
                        this.location.pause();
                        this.task.pause();
                    } catch (e) {
                        console.log(e.message);
                    }
                }, 1000)
            });
        } else {
            this.setState({ expand: false });
        }
    }

    CleanKitchen() {
        this.clean.play();
        setTimeout(() => {
            this.clean.pause()
        }, 3000)
    }

    render() {
        const {
            name,
            author,
            date,
            day,
            hours,
            location,
            cleaner,
            reward
        } = this.props.data[0];
        return (
            <Card style={{ borderRadius: 10, elevation: 0 }}>
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
                        padding: 5}}>
                        <Col style={{
                            padding: 5,
                            backgroundColor: "#e4f7fd",
                            borderRadius: 10
                        }}>
                            <Row style={{ margin: 5 }}>
                                <Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                    <LottieView
                                        source={require('../assets/animation/lottie/32854-specific-latent-heat-vaporization-question.json')}
                                        style={{ width: 50, height: 50 }}
                                        ref={animation => {
                                            this.kitchen = animation;
                                        }}
                                    />
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
                                            {name}
                                        </H2>
                                    </Row>
                                    <Row style={{ alignItems: "center", justifyContent: "center", padding: 10, flexDirection: "column", backgroundColor: "#ffffff" }}>
                                        <Col style={{ borderBottomColor: "#fcc4c3", borderBottomWidth: 3, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <LottieView
                                                source={require('../assets/animation/lottie/19995-money-stack.json')}
                                                style={{ width: 50, height: 50 }}
                                                ref={animation => {
                                                    this.reward = animation;
                                                }}
                                            />
                                            <Text>Bounty</Text>
                                        </Col>
                                        <Col>
                                            <Text>
                                                {reward}{' Pesos'}
                                            </Text>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ margin: 5 }}>
                                <Col size={20} style={{ justifyContent: "center", alignItems: "center", margin: 5 }}>
                                    <Image
                                        source={require('.././assets/images/1-demo-user.png')}
                                        style={{ borderRadius: 100, width: 50, height: 50 }} />
                                </Col>
                                <Col size={60} style={{ justifyContent: "center", flexDirection: "row-reverse", margin: 5 }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                            this.KitchenExpand(true);
                                        }}
                                        style={{ flexDirection: "row", flex: 1 }}>
                                        <Row style={{
                                            alignItems: "center", backgroundColor: "#05dee2",
                                            elevation: 0, borderColor: "white",
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
                                            {'By '}{author}

                                        </Text>
                                    </Row>
                                </Col>
                            </Row>
                            {
                                this.state.expand && (
                                    <>
                                        <Row style={{backgroundColor: "#e5f8f5", borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
                                            <Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                <LottieView
                                                    source={require('../assets/animation/lottie/24189-calendar-date.json')}
                                                    style={{ width: 50, height: 50 }}
                                                    ref={animation => {
                                                        this.calendar = animation;
                                                    }}
                                                />
                                            </Col>
                                            <Col size={80} style={{ justifyContent: "center" }}>
                                                <Text>
                                                    {date}{' '}{day}
                                                </Text>
                                            </Col>
                                        </Row>
                                        <Row style={{backgroundColor: "#e4f7fd"}}>
                                            <Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                <LottieView
                                                    source={require('../assets/animation/lottie/34851-clock-12-hours')}
                                                    style={{ width: 50, height: 50 }}
                                                    ref={animation => {
                                                        this.clock = animation;
                                                    }}
                                                />
                                            </Col>
                                            <Col size={80} style={{ justifyContent: "center" }}>
                                                <Text>
                                                    {hours} Hour Clean
                                                </Text>
                                            </Col>
                                        </Row>
                                        <Row style={{backgroundColor: "#e5f8f5"}}>
                                            <Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                <LottieView
                                                    source={require('../assets/animation/lottie/11422-travel-icons-map.json')}
                                                    style={{ width: 50, height: 50 }}
                                                    ref={animation => {
                                                        this.location = animation;
                                                    }}
                                                />
                                            </Col>
                                            <Col size={80} style={{ justifyContent: "center" }}>
                                                <Text>
                                                    {location}
                                                </Text>
                                            </Col>
                                        </Row>
                                        <TouchableOpacity>
                                            <Row style={{backgroundColor: "#e4f7fd", borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                                                <Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                    <LottieView
                                                        source={require('../assets/animation/lottie/20542-bag-with-stuff.json')}
                                                        style={{ width: 50, height: 50 }}
                                                        ref={animation => {
                                                            this.task = animation
                                                        }} />
                                                </Col>
                                                <Col size={80} style={{ justifyContent: "center" }}>
                                                    <Text>
                                                        Task
                                                </Text>
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

                            <TouchableOpacity onPress={() => this.CleanKitchen()}>
                                <LottieView
                                    source={require('../assets/animation/lottie/8489-clean.json')}
                                    style={{ width: 50, height: 50 }}
                                    ref={animation => {
                                        this.clean = animation;
                                    }}
                                />
                            </TouchableOpacity>
                        </Col>
                        <Col size={20}>
                            <Text></Text>
                        </Col>
                        <Col size={40}>
                            <Button block transparent style={{ elevation: 0 }}>
                                <Text style={{ borderBottomColor: "#05dee2", borderBottomWidth: 3 }}>
                                    <Text style={{ color: "#000000" }}>{cleaner} Cleaner</Text>
                                </Text>
                            </Button>
                        </Col>
                    </Grid>
                </CardItem>
            </Card>
        );
    }

    componentDidMount() {
        this.kitchen.play(30, 120);
        this.reward.play(30, 120);
        setTimeout(() => {
            try {
                this.kitchen.pause();
                this.reward.pause();
            } catch (e) {
                console.log(e.message);
            }
        }, 1000)
    }
}