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
    Item,
    Label,
    Input,
    H3,
    Picker,
    Textarea
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { Calendar } from 'react-native-calendars';
import DialogAndroid from 'react-native-dialogs';


import HomeFooter from '../utilities/home-footer';
import Job from '.././data/job-data';
import Hour from '.././data/work-hour-data';
import Reward from '.././data/reward-data';

import TaskBathData from '.././data/task/task-bath-data';
import TaskBedData from '.././data/task/task-bed-data';
import TaskClosetsData from '.././data/task/task-closets-data';
import TaskDiningData from '.././data/task/task-dining-data';
import TaskEntryData from '.././data/task/task-entry-data';
import TaskGarageData from '.././data/task/task-garage-data';
import TaskHouseData from '.././data/task/task-house-data';
import TaskKitchenData from '.././data/task/task-kitchen-data';
import TaskLaundryData from '.././data/task/task-laundry-data';
import TaskLivingData from '.././data/task/task-living-data';
import TaskOfficeData from '.././data/task/task-office-data';

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
                        this.state.task = TaskKitchenData;
                        this.setState({ task: this.state.task });
                        break;
                    case "Living":
                        this.state.task = TaskLivingData;
                        this.setState({ task: this.state.task });
                        break;
                    case "Wash":
                        this.state.task = TaskLaundryData;
                        this.setState({ task: this.state.task });
                        break;
                    case "Bath":
                        this.state.task = TaskBathData;
                        this.setState({ task: this.state.task });
                        break;
                    case "Bed":
                        this.state.task = TaskBedData;
                        this.setState({ task: this.state.task });
                        break;
                    case "Garage":
                        this.state.task = TaskGarageData;
                        this.setState({ task: this.state.task });
                        break;
                    case "Closets":
                        this.state.task = TaskClosetsData;
                        this.setState({ task: this.state.task });
                        break;
                    case "Dining":
                        this.state.task = TaskDiningData;
                        this.setState({ task: this.state.task });
                        break;
                    case "Office":
                        this.state.task = TaskOfficeData;
                        this.setState({ task: this.state.task });
                        break;
                    case "Throughout House":
                        this.state.task = TaskHouseData;
                        this.setState({ task: this.state.task });
                        break;
                    default:
                        break;
                }
            }
        });
    }

    async onSelectTask() {
        const { selectedItems } = await DialogAndroid.showPicker('Select multiple fruits', null, {
            type: DialogAndroid.listCheckbox,
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
                    <Title>Create Job</Title>
                </Header>
                <Content padder>
                    <Card transparent style={{ borderRadius: 10, padding: 10, backgroundColor: "#e5f8f5" }}>
                        <CardItem style={{ borderRadius: 10, padding: 10, flexDirection: "column" }}>
                            <Body style={{ padding: 10, backgroundColor: "#e4f7fd", borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                <Grid style={{ margin: 5 }}>
                                    <Col>
                                        <Item picker style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3, margin: 5 }}>
                                            <Icon type="MaterialIcons" name='work-outline' />
                                            <Picker
                                                mode="dialog"
                                                style={{ width: undefined }}
                                                selectedValue={this.state.job}
                                                onValueChange={(v, i) => { this.onSelectJob(v, i) }}>
                                                {
                                                    Job.map((v) => (
                                                        <Picker.Item key={v} label={v === "Select Work" ? v : `${v} Room`} value={v} />
                                                    ))
                                                }

                                            </Picker>
                                        </Item>
                                        <Item style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3, margin: 5 }}>
                                            <Grid>
                                                <Col>
                                                    <Button block onPress={() => this.onSelectTask()} style={{ backgroundColor: "#fcc4c3" }}>
                                                        <Text>Select Task</Text>
                                                    </Button>
                                                </Col>
                                            </Grid>
                                        </Item>
                                        <Item picker style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3, margin: 5 }}>
                                            <Icon type="MaterialIcons" name='attach-money' />
                                            <Picker
                                                mode="dialog"
                                                style={{ width: undefined }}
                                                selectedValue={this.state.bounty}
                                                onValueChange={(v, i) => { this.onSelectBounty(v, i) }}>
                                                {
                                                    Reward.map((v) => (
                                                        <Picker.Item key={v} label={v === "Select Bounty" ? v : `${v} Pesos`} value={v} />
                                                    ))
                                                }

                                            </Picker>
                                        </Item>
                                        <Item picker style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3, margin: 5 }}>
                                            <Icon name='md-hourglass-outline' />
                                            <Picker
                                                mode="dialog"
                                                style={{ width: undefined }}
                                                selectedValue={this.state.hour}
                                                onValueChange={(v, i) => { this.onSelectHour(v, i) }}>
                                                {
                                                    Hour.map((v) => (
                                                        <Picker.Item key={v} label={v === "Select Hour" ? v : `${v} Hour`} value={v} />
                                                    ))
                                                }

                                            </Picker>
                                        </Item>
                                        <Item style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3 }}>
                                            <Grid>
                                                <Col style={{ justifyContent: "center", margin: 5 }}>
                                                    <Textarea
                                                        value={this.state.description}
                                                        onChangeText={v => { this.onCreateDescription(v) }}
                                                        maxLength={100}
                                                        rowSpan={5}
                                                        bordered
                                                        placeholder="Description" />
                                                </Col>
                                            </Grid>
                                        </Item>
                                    </Col>
                                </Grid>
                                <Grid style={{ margin: 5 }}>
                                    <Col>
                                        <Row style={{ justifyContent: "center", alignItems: "center", margin: 5 }}>
                                            <Text>Starting Date</Text>
                                        </Row>
                                        <Row>
                                            <Calendar
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
                                        </Row>
                                    </Col>
                                </Grid>
                                <Button
                                    onPress={() => { this.onSubmit() }}
                                    rounded
                                    block
                                    style={{ backgroundColor: "#05dee2", elevation: 0 }}>
                                    <H3 style={{ color: "#FFFFFF" }}>Create Work</H3>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <HomeFooter {...this.props} page="Create Job" />
            </Container>
        );
    }
}