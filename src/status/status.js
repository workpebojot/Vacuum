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
    Root,
    Segment
} from 'native-base';
import { Navigation } from 'react-native-navigation';
import SampleData from '../data/sample-data';

export default class Status extends React.Component {

    state = {
        madestatus: true,
        cleanedtatus: false,
        madedata: [],
        cleaneddata: []
    }

    MadeStatus() {
        this.state.madestatus = true;
        this.setState({ madestatus: this.state.madestatus });

        this.state.cleanedtatus = false;
        this.setState({ cleanedtatus: this.state.cleanedtatus });
    }

    CleanedStatus() {
        this.state.cleanedtatus = true;
        this.setState({ cleanedtatus: this.state.cleanedtatus });


        this.state.madestatus = false;
        this.setState({ madestatus: this.state.madestatus });
    }

    render() {
        return (
            <Container>
                <Header
                    hasSegment
                    androidStatusBarColor="#05dee2"
                    style={{
                        backgroundColor: "#05dee2",
                        marginTop: "7.5%",
                        elevation: 0
                    }}>
                    <Left>
                        <Button
                            onPress={
                                () => Navigation.pop(this.props.componentId)
                            }
                            transparent>
                            <Icon name='md-arrow-back-outline' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Status</Title>
                    </Body>
                </Header>
                <Segment style={{ backgroundColor: "transparent" }}>
                    <Button
                        onPress={this.MadeStatus.bind(this)}
                        style={{ backgroundColor: this.state.madestatus ? "#fcc4c3" : "#05dee2", padding: 10 }}
                        first
                        active={this.state.madestatus}>
                        <Text style={{ color: "#ffffff" }}>Made</Text>
                    </Button>
                    <Button
                        onPress={this.CleanedStatus.bind(this)}
                        style={{ backgroundColor: this.state.cleanedtatus ? "#fcc4c3" : "#05dee2", padding: 10 }}
                        last
                        active={this.state.cleanedtatus}>
                        <Text style={{ color: "#ffffff" }}>Cleaned</Text>
                    </Button>
                </Segment>
                <Content padder>
                    <List>
                        <ListItem itemDivider>
                            <Text>Latest {this.state.madestatus ? "Made" : "Cleaned"}</Text>
                        </ListItem>
                        {
                            this.state.madestatus && this.state.madedata.map((value, key) => (
                                <ListItem key={key}>
                                    <Text>{`${value.name} Room `}</Text>
                                    <Text note>{`${value.date}`}</Text>
                                </ListItem>
                            ))
                        }
                        {
                            this.state.cleanedtatus && this.state.cleaneddata.map((value, key) => (
                                <ListItem key={key}>
                                    <Text>{`${value.name} Room `}</Text>
                                    <Text note>{`${value.date}`}</Text>
                                </ListItem>
                            ))
                        }
                    </List>
                </Content>
            </Container >
        );
    }

    componentDidMount() {
        this.state.madedata = SampleData;
        this.setState({ madedata: this.state.madedata });

        this.state.cleaneddata = SampleData;
        this.setState({ cleaneddata: this.state.cleaneddata });
    }
}