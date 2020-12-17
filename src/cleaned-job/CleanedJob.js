import * as React from 'react';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Text,
    Body,
    Left,
    Right,
    Button,
    Title,
    Icon,
    List,
    ListItem
} from 'native-base';
import LottieView from 'lottie-react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import HomeFooter from '../utilities/home-footer';
import AsyncStorageMethod from './../utilities/method/async-storage';
import SampleData from '.././data/sample-data';

export default class CleanedJob extends React.Component {

    constructor(props) {
        super(props);
        this.storage = new AsyncStorageMethod();
    }

    state = {
        cleaned: [],
        data: []
    }

    deleteCleaned(item, key) {
        if (this.state.cleaned.length === 1) {
            this.state.cleaned = [];
            this.setState({ cleaned: this.state.cleaned }, () => {
                this.storage.removedCleanedJob(key, item);
            });
        } else {
            const stateArray = this.state.cleaned;
            const stateData = this.state.data;

            const indexArray = [...stateArray];
            const indexData = [...stateData];

            const items = "" + item
            const position = indexArray.indexOf(items);
            indexArray.splice(position, 1);
            this.state.cleaned = indexArray;
            this.setState({ cleaned: this.state.cleaned }, () => {
                console.log("Key: ", key, "Item: ", item);
                this.storage.removedCleanedJob(key, item);
            });

            const newData = indexData.filter(value => value.id != item);
            this.state.data = newData;
            this.setState({ data: this.state.data });
        }
    }

    render() {
        return (
            <Container>
                <Header
                    androidStatusBarColor="#05dee2"
                    style={{
                        backgroundColor: "#05dee2",
                        marginTop: "7.5%",
                        elevation: 0,
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center"
                    }}>
                    <Title>Cleaned Job</Title>
                </Header>
                {
                    (this.state.cleaned.length !== 0) && this.state.data.length !== 0 ? (
                        <Content padder>
                            <List>
                                <ListItem itemHeader first>
                                    <Text>Cleaned Job</Text>
                                </ListItem>
                                {
                                    this.state.data.map((value, key) => (
                                        <ListItem key={key}>
                                            <Grid>
                                                <Col style={{ padding: 5 }}>
                                                    <Row>
                                                        <Text>{`${value.author.first} ${value.author.last} `}</Text>
                                                    </Row>
                                                    <Row>
                                                        <Text note>
                                                            {`${value.name} Room`}
                                                        </Text>
                                                    </Row>
                                                </Col>
                                                <Col style={{ justifyContent: "center", padding: 5 }}>
                                                    <Button
                                                        onPress={() => this.deleteCleaned(value.id, "cleaning")}
                                                        style={{
                                                            alignSelf: "flex-end",
                                                            elevation: 0,
                                                            borderRadius: 5,
                                                            backgroundColor: "#fcc4c3"
                                                        }}>
                                                        <Text>Delete</Text>
                                                    </Button>
                                                </Col>
                                            </Grid>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Content>
                    ) : (
                            <Grid>
                                <Col style={{ justifyContent: "center", alignItems: "center" }}>
                                    <LottieView
                                        source={require('../assets/animation/lottie/8021-empty-and-lost.json')}
                                        style={{ alignSelf: "center" }}
                                        autoSize
                                        autoPlay
                                        resizeMode="center" />
                                </Col>
                            </Grid>
                        )
                }
                <HomeFooter {...this.props} page="Cleaned Job" />
            </Container >
        );
    }

    async componentDidMount() {
        try {
            // await this.storage.Clear();
            const value = await this.storage.GetAllKeys();
            if ((value !== undefined) && value.length !== 0) {
                const cleaned = value.filter(v => v == "cleaning")[0];
                if (cleaned != null) {
                    const cleanedValue = await this.storage.GetData(cleaned);
                    JSON.parse(cleanedValue, (key, value) => {
                        if (typeof value == "string") {
                            this.state.cleaned.push(value);
                            this.setState({ cleaned: this.state.cleaned }, () => {
                                SampleData.map(value => {
                                    for (let i = 0, l = this.state.cleaned.length; i <= l; i++) {
                                        if (this.state.cleaned[i] == value.id) {
                                            this.state.data.push(value);
                                            const stateArray = this.state.data;
                                            const setArray = new Set(stateArray);
                                            const newArray = [...setArray];
                                            this.state.data = newArray;
                                            this.setState({ data: this.state.data });
                                        }
                                    }
                                })
                            });
                        }
                    });
                }
            } else {
                this.state.cleaned = [];
                this.setState({ cleaned: this.state.cleaned });
            }
        } catch (e) {

        }
    }
}