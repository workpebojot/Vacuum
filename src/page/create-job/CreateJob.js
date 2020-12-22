import React from 'react';
import * as Library from '../../abstract-library';
import * as Template from '../../abstract-template';
import * as Data from '../../abstract-data';

export default class CreateJob extends React.Component {

    state = {
        job: "Select Work",
        task: "",
        bounty: "",
        hour: "",
        description: "",
        today: new Date().toISOString().slice(0, 10),
        date: ""
    }

    onSelectJob(value, index) {
        this.setState({
            job: value
        }, () => {
            if (index != 0) {
                console.log(this.state.job, index);
                switch (this.state.job) {
                    case "Kitchen":
                        this.state.task = Data.Data.kitchen;
                        this.setState({ task: this.state.task });
                        break;
                    case "Living":
                        this.state.task = Data.Data.living;
                        this.setState({ task: this.state.task });
                        break;
                    case "Wash":
                        this.state.task = Data.Data.laundry;
                        this.setState({ task: this.state.task });
                        break;
                    case "Bath":
                        this.state.task = Data.Data.bath;
                        this.setState({ task: this.state.task });
                        break;
                    case "Bed":
                        this.state.task = Data.Data.bed;
                        this.setState({ task: this.state.task });
                        break;
                    case "Garage":
                        this.state.task = Data.Data.garage;
                        this.setState({ task: this.state.task });
                        break;
                    case "Closets":
                        this.state.task = Data.Data.closet;
                        this.setState({ task: this.state.task });
                        break;
                    case "Dining":
                        this.state.task = Data.Data.dining;
                        this.setState({ task: this.state.task });
                        break;
                    case "Office":
                        this.state.task = Data.Data.office;
                        this.setState({ task: this.state.task });
                        break;
                    case "Throughout House":
                        this.state.task = Data.Data.house;
                        this.setState({ task: this.state.task });
                        break;
                    default:
                        break;
                }
            } else {
                this.state.task = "";
                this.setState({ task: this.state.task });
            }
        });
    }

    async onSelectTask() {
        const { selectedItems } = await Library.DialogAndroid.showPicker('Select multiple fruits', null, {
            type: Library.DialogAndroid.listCheckbox,
            items: this.state.task
        });
        if (selectedItems) {
            if (!selectedItems.length) {
                console.log('You selected no items.');
            } else {
                console.log('You selected items:', selectedItems);
            }
        }
    }

    onSelectBounty(value, index) {
        this.setState({
            bounty: value
        }, () => {
            if (index != 0) {
                console.log(this.state.bounty, index);
            }
        });
    }

    onSelectHour(value, index) {
        this.setState({
            hour: value
        }, () => {
            if (index != 0) {
                console.log(this.state.hour, index);
            }
        });
    }

    onCreateDescription(value) {
        this.setState({
            description: value
        }, () => {
            console.log(this.state.description);
        });
    }

    onSelectDate(date) {
        const { dateString } = date;

        this.state.today = dateString;
        this.setState({ date: this.state.today });

        this.state.date = date;
        this.setState({ date: this.state.date });
    }

    onSubmit() {
        console.log("Job: ", this.state.job);
        console.log("Task: ", this.state.task);
        console.log("Bounty: ", this.state.bounty);
        console.log("Hour: ", this.state.hour);
        console.log("Description: ", this.state.description);
        console.log("Date: ", this.state.date);

        return Library.Nav.push(this.props.componentId, {
            component: {
                name: "MadeJob",
                passProps: {
                    current: "Made Job",
                    back: "CreateJob"
                },
                options: {
                    topBar: {
                        visible: false
                    },
                    animations: {
                        push: {
                            content: {
                                alpha: {
                                    from: 0,
                                    to: 1,
                                    duration: 100,
                                }
                            },
                            waitForRender: true
                        }
                    }
                }
            }
        });
    }

    render() {
        return (
            <Library.Base.Container>
                <Library.Base.Header
                    androidStatusBarColor="#05dee2"
                    style={{
                        backgroundColor: "#05dee2",
                        marginTop: "7.5%",
                        elevation: 0,
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center"
                    }}>
                    <Library.Base.Title>Create Job</Library.Base.Title>
                </Library.Base.Header>
                <Library.Base.Content padder>
                    <Library.Base.Card transparent style={{ borderRadius: 10, padding: 10, backgroundColor: "#e5f8f5" }}>
                        <Library.Base.CardItem style={{ borderRadius: 10, padding: 10, flexDirection: "column" }}>
                            <Library.Base.Body style={{ padding: 10, backgroundColor: "#e4f7fd", borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                <Library.Box.Grid style={{ margin: 5 }}>
                                    <Library.Box.Col>
                                        <Library.Base.Item picker style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3, margin: 5 }}>
                                            <Library.Base.Icon type="MaterialIcons" name='work-outline' />
                                            <Library.Base.Picker
                                                mode="dialog"
                                                style={{ width: undefined }}
                                                selectedValue={this.state.job}
                                                onValueChange={(v, i) => { this.onSelectJob(v, i) }}>
                                                {
                                                    Data.Data.job.map((v) => (
                                                        <Library.Base.Picker.Item key={v} label={v === "Select Work" ? v : `${v} Room`} value={v} />
                                                    ))
                                                }

                                            </Library.Base.Picker>
                                        </Library.Base.Item>
                                        <Library.Base.Item style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3, margin: 5 }}>
                                            <Library.Box.Grid>
                                                <Library.Box.Col>
                                                    <Library.Base.Button block onPress={this.onSelectTask.bind(this)} style={{ backgroundColor: "#fcc4c3" }}>
                                                        <Library.Base.Text>Select Task</Library.Base.Text>
                                                    </Library.Base.Button>
                                                </Library.Box.Col>
                                            </Library.Box.Grid>
                                        </Library.Base.Item>
                                        <Library.Base.Item picker style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3, margin: 5 }}>
                                            <Library.Base.Icon type="MaterialIcons" name='attach-money' />
                                            <Library.Base.Picker
                                                mode="dialog"
                                                style={{ width: undefined }}
                                                selectedValue={this.state.bounty}
                                                onValueChange={(v, i) => { this.onSelectBounty(v, i) }}>
                                                {
                                                    Data.Data.reward.map((v) => (
                                                        <Library.Base.Picker.Item key={v} label={v === "Select Bounty" ? v : `${v} Pesos`} value={v} />
                                                    ))
                                                }

                                            </Library.Base.Picker>
                                        </Library.Base.Item>
                                        <Library.Base.Item picker style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3, margin: 5 }}>
                                            <Library.Base.Icon name='md-hourglass-outline' />
                                            <Library.Base.Picker
                                                mode="dialog"
                                                style={{ width: undefined }}
                                                selectedValue={this.state.hour}
                                                onValueChange={(v, i) => { this.onSelectHour(v, i) }}>
                                                {
                                                    Data.Data.hour.map((v) => (
                                                        <Library.Base.Picker.Item key={v} label={v === "Select Hour" ? v : `${v} Hour`} value={v} />
                                                    ))
                                                }

                                            </Library.Base.Picker>
                                        </Library.Base.Item>
                                        <Library.Base.Item style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3 }}>
                                            <Library.Box.Grid>
                                                <Library.Box.Col style={{ justifyContent: "center", margin: 5 }}>
                                                    <Library.Base.Textarea
                                                        value={this.state.description}
                                                        onChangeText={v => { this.onCreateDescription(v) }}
                                                        maxLength={100}
                                                        rowSpan={5}
                                                        bordered
                                                        placeholder="Description" />
                                                </Library.Box.Col>
                                            </Library.Box.Grid>
                                        </Library.Base.Item>
                                    </Library.Box.Col>
                                </Library.Box.Grid>
                                <Library.Box.Grid style={{ margin: 5 }}>
                                    <Library.Box.Col>
                                        <Library.Box.Row style={{ justifyContent: "center", alignItems: "center", margin: 5 }}>
                                            <Library.Base.Text>Starting Date</Library.Base.Text>
                                        </Library.Box.Row>
                                        <Library.Box.Row>
                                            <Library.Calendar
                                                markedDates={{
                                                    [this.state.today]: {
                                                        selected: true,
                                                        marked: true,
                                                        selectedColor: '#05dee2',
                                                        dotColor: '#05dee2'
                                                    }
                                                }}
                                                onDayPress={(day) => { this.onSelectDate(day) }}
                                                firstDay={1} />
                                        </Library.Box.Row>
                                    </Library.Box.Col>
                                </Library.Box.Grid>
                                <Library.Base.Button
                                    onPress={() => { this.onSubmit() }}
                                    rounded
                                    block
                                    style={{ backgroundColor: "#05dee2", elevation: 0 }}>
                                    <Library.Base.H3 style={{ color: "#FFFFFF" }}>Create Work</Library.Base.H3>
                                </Library.Base.Button>
                            </Library.Base.Body>
                        </Library.Base.CardItem>
                    </Library.Base.Card>
                </Library.Base.Content>
                <Template.Footer {...this.props} page="Create Job" />
            </Library.Base.Container>
        );
    }


    componentDidMount() {
        Library.Native.BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        Library.Native.BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        return true;
    }
}