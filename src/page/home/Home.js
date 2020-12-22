import * as React from 'react';
import * as Library from '../../abstract-library';
import * as Helper from '../../abstract-helper';
import * as Data from '../../abstract-data';
import * as Template from '../../abstract-template';

var BUTTONS = [
    { text: "Delete Account", icon: "deleteuser", iconColor: "#f42ced", iconType: "AntDesign" },
    { text: "Logout Account", icon: "logout", iconColor: "#2c8ef4", iconType: "MaterialIcons" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.storage = new Helper.StorageMethod();
    }

    state = {
        isMadeData: [],
        isCleanedData: [],
        cleandID: []
    }

    onSetting() {
        Library.Base.ActionSheet.show(
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
        const { action } = await Library.DialogAndroid.alert("Delete Account", "Are you sure you want to delete your accout?", {
            positiveText: "Yes",
            negativeText: "No"
        });
        switch (action) {
            case Library.DialogAndroid.actionPositive:
                console.log('positive!')
                break;
            case Library.DialogAndroid.actionNegative:
                console.log('negative!')
                break;
            case Library.DialogAndroid.actionNeutral:
                console.log('neutral!')
                break;
            case Library.DialogAndroid.actionDismiss:
                console.log('dismissed!')
                break;
        }
    }


    async logoutAccount() {
        const { action } = await Library.DialogAndroid.alert("Logout Account", "Are you sure you want to logout your accout?", {
            positiveText: "Yes",
            negativeText: "No"
        });
        switch (action) {
            case Library.DialogAndroid.actionPositive:
                console.log('positive!')
                Library.Nav.setRoot({
                    root: {
                        stack: {
                            children: [
                                {
                                    component: {
                                        name: 'Overview'
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
            case Library.DialogAndroid.actionNegative:
                console.log('negative!')
                break;
            case Library.DialogAndroid.actionNeutral:
                console.log('neutral!')
                break;
            case Library.DialogAndroid.actionDismiss:
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
            <Library.Base.Root>
                <Library.Base.Container>
                    <Library.Base.Header
                        androidStatusBarColor="#05dee2"
                        style={{
                            backgroundColor: "#05dee2",
                            marginTop: "7.5%",
                            elevation: 0
                        }}>
                        <Library.Base.Left>
                            <Library.Base.Button transparent>
                                <Library.Base.Icon name='md-home-outline' />
                            </Library.Base.Button>
                        </Library.Base.Left>
                        <Library.Base.Body>
                            <Library.Base.Title>Home</Library.Base.Title>
                        </Library.Base.Body>
                        <Library.Base.Right>
                            <Library.Base.Button
                                onPress={
                                    () => Library.Nav.push(this.props.componentId, {
                                        component: {
                                            name: "Status"
                                        }
                                    })
                                }
                                transparent
                                badge>
                                <Library.Base.Badge>
                                    <Library.Base.Text>51</Library.Base.Text>
                                </Library.Base.Badge>
                                <Library.Base.Icon name='md-notifications-outline' />
                            </Library.Base.Button>
                            <Library.Base.Button
                                onPress={this.onSetting.bind(this)}
                                transparent
                                badge>
                                <Library.Base.Badge><Library.Base.Text>51</Library.Base.Text></Library.Base.Badge>
                                <Library.Base.Icon name='md-settings-outline' />
                            </Library.Base.Button>
                        </Library.Base.Right>
                    </Library.Base.Header>
                    <Library.Base.Content padder>
                        <Library.Base.List>
                            {
                                (this.state.isMadeData.length !== 0) ? (
                                    <>
                                        <Library.Base.ListItem itemDivider>
                                            <Library.Base.Text>Made</Library.Base.Text>
                                        </Library.Base.ListItem>
                                        {
                                            this.state.isMadeData.map((value, key) => (
                                                <Library.Base.ListItem key={key}>
                                                    <Library.Box.Grid>
                                                        <Library.Box.Col style={{ justifyContent: 'flex-start' }}>
                                                            <Library.Base.Text style={{ alignSelf: 'flex-start' }}>
                                                                {`${value.name} Room`}
                                                            </Library.Base.Text>
                                                            <Library.Base.Text note style={{ alignSelf: 'flex-start' }}>
                                                                {`Created at ${value.date}`}
                                                            </Library.Base.Text>
                                                        </Library.Box.Col>
                                                        <Library.Box.Col style={{ justifyContent: 'flex-end' }}>
                                                            <Library.Base.Button
                                                                style={{
                                                                    alignSelf: "flex-end",
                                                                    backgroundColor: "#fcc4c3"
                                                                }}>
                                                                <Library.Base.Text>Delete</Library.Base.Text>
                                                            </Library.Base.Button>
                                                        </Library.Box.Col>
                                                    </Library.Box.Grid>
                                                </Library.Base.ListItem>
                                            ))
                                        }
                                    </>
                                ) : (
                                        <Library.Base.ListItem itemDivider style={{ marginBottom: 5 }}>
                                            <Library.Base.Text>Empty</Library.Base.Text>
                                        </Library.Base.ListItem>
                                    )
                            }
                            {
                                (this.state.cleandID.length !== 0) && this.state.isCleanedData.length !== 0 ? (
                                    <>
                                        <Library.Base.ListItem itemDivider>
                                            <Library.Base.Text>Cleaned</Library.Base.Text>
                                        </Library.Base.ListItem>
                                        {
                                            this.state.isCleanedData.map((value, key) => (
                                                <Library.Base.ListItem key={key}>
                                                    <Library.Box.Grid>
                                                        <Library.Box.Col style={{ justifyContent: 'flex-start' }}>
                                                            <Library.Base.Text style={{ alignSelf: 'flex-start' }}>
                                                                {`${value.name} Room`}
                                                            </Library.Base.Text>
                                                            <Library.Base.Text note style={{ alignSelf: 'flex-start' }}>
                                                                {`Created at ${value.date}`}
                                                            </Library.Base.Text>
                                                        </Library.Box.Col>
                                                        <Library.Box.Col style={{ justifyContent: 'flex-end' }}>
                                                            <Library.Base.Button
                                                                onPress={() => this.deleteCleaned("cleaning", value.id)}
                                                                style={{
                                                                    alignSelf: "flex-end",
                                                                    backgroundColor: "#fcc4c3"
                                                                }}>
                                                                <Library.Base.Text>Delete</Library.Base.Text>
                                                            </Library.Base.Button>
                                                        </Library.Box.Col>
                                                    </Library.Box.Grid>
                                                </Library.Base.ListItem>
                                            ))
                                        }
                                    </>
                                ) : (
                                        <Library.Base.ListItem itemDivider>
                                            <Library.Base.Text>Empty</Library.Base.Text>
                                        </Library.Base.ListItem>
                                    )
                            }
                        </Library.Base.List>
                    </Library.Base.Content>
                    <Template.Footer {...this.props} page="Home" />
                </Library.Base.Container>
            </Library.Base.Root>
        );
    }

    async componentDidMount() {
        try {
            Library.Native.BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
            this.state.isMadeData = Component.Data.user;
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
                                Data.Data.user.map(value => {
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
        Library.Native.BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        return true;
    }

}