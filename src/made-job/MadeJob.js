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
import { BackHandler } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import HomeFooter from '../utilities/home-footer';
import SampleData from '..//data/sample-data';

export default class MadeJob extends React.Component {

    state = {
        data: []
    }

    deleteMade(id) {
        const newArray = this.state.data.filter(v => v.id != id);
        this.state.data = newArray;
        this.setState({ data: this.state.data });
    }


    render() {
        return (
            <Container>
                <Header style={{
                    backgroundColor: "#05dee2",
                    marginTop: "7.5%",
                    elevation: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center"
                }}>
                    <Title>Made Job</Title>
                </Header>
                <Content padder>
                    <List>
                        <ListItem itemDivider>
                            <Text>Latest</Text>
                        </ListItem>
                        {
                            this.state.data.map((value, key) => (
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
                                                onPress={() => this.deleteMade(value.id)}
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
                    </List>
                </Content>
                <HomeFooter {...this.props} page="Made Job" />
            </Container>
        );
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        this.state.data = SampleData;
        this.setState({ data: this.state.data });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        return true;
    }
}