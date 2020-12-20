import * as React from 'react';
import { BackHandler } from 'react-native';
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
    Badge,
    List,
    ListItem,
    ActionSheet,
    Root
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import DialogAndroid from 'react-native-dialogs';
import { Navigation } from 'react-native-navigation';
import LottieView from 'lottie-react-native';
import HomeFooter from '../utilities/home-footer';
import AsyncStorageMethod from './../utilities/method/async-storage';
import SampleData from '..//data/sample-data';

var BUTTONS = [
    { text: "Delete Account", icon: "deleteuser", iconColor: "#f42ced", iconType: "AntDesign" },
    { text: "Logout Account", icon: "logout", iconColor: "#2c8ef4", iconType: "MaterialIcons" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.storage = new AsyncStorageMethod();
    }

    state = {
        isMadeData: [],
        isCleanedData: [],
        cleandID: []
    }

    onSetting() {
        ActionSheet.show(
            {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Setting"
            },
            async (buttonIndex) => {
                try {
                    await this.onSettingSelected(BUTTONS[buttonIndex]);
                } catch (e) {

                }
            }
        )

    }

    async onSettingSelected(option) {
        switch (option.text) {
            case "Delete Account":
                await this.deleteAccount();
                break;
            case "Logout Account":
                await this.logoutAccount();
                break;
            default:
                break;
        }
    }

    async deleteAccount() {
        const { action } = await DialogAndroid.alert("Delete Account", "Are you sure you want to delete your accout?", {
            positiveText: "Yes",
            negativeText: "No"
        });
        switch (action) {
            case DialogAndroid.actionPositive:
                console.log('positive!')
                break;
            case DialogAndroid.actionNegative:
                console.log('negative!')
                break;
            case DialogAndroid.actionNeutral:
                console.log('neutral!')
                break;
            case DialogAndroid.actionDismiss:
                console.log('dismissed!')
                break;
        }
    }


    async logoutAccount() {
        const { action } = await DialogAndroid.alert("Logout Account", "Are you sure you want to logout your accout?", {
            positiveText: "Yes",
            negativeText: "No"
        });
        switch (action) {
            case DialogAndroid.actionPositive:
                console.log('positive!')
                Navigation.setRoot({
                    root: {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'OverView'
                                    }
                                }
                            ],
                            options: {
                                animations: {
                                    setRoot: {
                                        waitForRender: true
                                    }
                                }
                            }
                        }
                    }
                });
                break;
            case DialogAndroid.actionNegative:
                console.log('negative!')
                break;
            case DialogAndroid.actionNeutral:
                console.log('neutral!')
                break;
            case DialogAndroid.actionDismiss:
                console.log('dismissed!')
                break;
        }
    }

    deleteCleaned(key, item) {
        if (this.state.cleandID.length === 1) {
            this.state.cleandID = [];
            this.setState({ cleandID: this.state.cleandID }, () => {
                this.storage.removedCleanedJob(key, item);
            });
        } else {
            const stateArray = this.state.cleandID;
            const stateData = this.state.isCleanedData;

            const indexArray = [...stateArray];
            const indexData = [...stateData];

            const items = "" + item
            const position = indexArray.indexOf(items);
            indexArray.splice(position, 1);
            this.state.cleandID = indexArray;
            this.setState({ cleandID: this.state.cleandID }, () => {
                this.storage.removedCleanedJob(key, item);
            });

            const newData = indexData.filter(value => value.id != item);
            this.state.isCleanedData = newData;
            this.setState({ isCleanedData: this.state.isCleanedData });
        }
    }

    render() {
        return (
            <Root>
                <Container>
                    <Header
                        androidStatusBarColor="#05dee2"
                        style={{
                            backgroundColor: "#05dee2",
                            marginTop: "7.5%",
                            elevation: 0
                        }}>
                        <Left>
                            <Button transparent>
                                <Icon name='md-home-outline' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Home</Title>
                        </Body>
                        <Right>
                            <Button
                                onPress={
                                    () => Navigation.push(this.props.componentId, {
                                        component: {
                                            name: "Status"
                                        }
                                    })
                                }
                                transparent
                                badge>
                                <Badge><Text>51</Text></Badge>
                                <Icon name='md-notifications-outline' />
                            </Button>
                            <Button
                                onPress={this.onSetting.bind(this)}
                                transparent
                                badge>
                                <Badge><Text>51</Text></Badge>
                                <Icon name='md-settings-outline' />
                            </Button>
                        </Right>
                    </Header>
                    <Content padder>
                        <List>
                            {
                                (this.state.isMadeData.length !== 0) ? (
                                    <>
                                        <ListItem itemDivider>
                                            <Text>Made</Text>
                                        </ListItem>
                                        {
                                            this.state.isMadeData.map((value, key) => (
                                                <ListItem key={key}>
                                                    <Grid>
                                                        <Col style={{ justifyContent: 'flex-start' }}>
                                                            <Text style={{ alignSelf: 'flex-start' }}>
                                                                {`${value.name} Room`}
                                                            </Text>
                                                            <Text note style={{ alignSelf: 'flex-start' }}>
                                                                {`Created at ${value.date}`}
                                                            </Text>
                                                        </Col>
                                                        <Col style={{ justifyContent: 'flex-end' }}>
                                                            <Button
                                                                style={{
                                                                    alignSelf: "flex-end",
                                                                    backgroundColor: "#fcc4c3"
                                                                }}>
                                                                <Text>Delete</Text>
                                                            </Button>
                                                        </Col>
                                                    </Grid>
                                                </ListItem>
                                            ))
                                        }
                                    </>
                                ) : (
                                        <ListItem itemDivider style={{ marginBottom: 5 }}>
                                            <Text>Empty</Text>
                                        </ListItem>
                                    )
                            }
                            {
                                (this.state.cleandID.length !== 0) && this.state.isCleanedData.length !== 0 ? (
                                    <>
                                        <ListItem itemDivider>
                                            <Text>Cleaned</Text>
                                        </ListItem>
                                        {
                                            this.state.isCleanedData.map((value, key) => (
                                                <ListItem key={key}>
                                                    <Grid>
                                                        <Col style={{ justifyContent: 'flex-start' }}>
                                                            <Text style={{ alignSelf: 'flex-start' }}>
                                                                {`${value.name} Room`}
                                                            </Text>
                                                            <Text note style={{ alignSelf: 'flex-start' }}>
                                                                {`Created at ${value.date}`}
                                                            </Text>
                                                        </Col>
                                                        <Col style={{ justifyContent: 'flex-end' }}>
                                                            <Button
                                                                onPress={() => this.deleteCleaned("cleaning", value.id)}
                                                                style={{
                                                                    alignSelf: "flex-end",
                                                                    backgroundColor: "#fcc4c3"
                                                                }}>
                                                                <Text>Delete</Text>
                                                            </Button>
                                                        </Col>
                                                    </Grid>
                                                </ListItem>
                                            ))
                                        }
                                    </>
                                ) : (
                                        <ListItem itemDivider>
                                            <Text>Empty</Text>
                                        </ListItem>
                                    )
                            }
                        </List>
                    </Content>
                    <HomeFooter {...this.props} page="Home" />
                </Container>
            </Root>
        );
    }

    async componentDidMount() {
        try {
            BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
            this.state.isMadeData = SampleData;
            this.setState({ isMadeData: this.state.isMadeData });

            // await this.storage.Clear();
            const value = await this.storage.GetAllKeys();
            if ((value !== undefined) && value.length !== 0) {
                const cleaned = value.filter(v => v == "cleaning")[0];
                if (cleaned != null) {
                    const cleanedValue = await this.storage.GetData(cleaned);
                    JSON.parse(cleanedValue, (key, value) => {
                        if (typeof value == "string") {
                            this.state.cleandID.push(value);
                            this.setState({ cleandID: this.state.cleandID }, () => {
                                SampleData.map(value => {
                                    for (let i = 0, l = this.state.cleandID.length; i <= l; i++) {
                                        if (this.state.cleandID[i] == value.id) {
                                            this.state.isCleanedData.push(value);
                                            const stateArray = this.state.isCleanedData;
                                            const setArray = new Set(stateArray);
                                            const newArray = [...setArray];
                                            this.state.isCleanedData = newArray;
                                            this.setState({ isCleanedData: this.state.isCleanedData });
                                        }
                                    }
                                })
                            });
                        }
                    });
                }
            } else {
                this.state.cleandID = [];
                this.setState({ cleaned: this.state.cleandID });
            }

        } catch (e) {

        }
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        return true;
    }

}