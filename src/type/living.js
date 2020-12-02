import * as React from 'react';
import {
    Button,
    Card,
    Text,
    CardItem,
    Icon,
    H3,
    H2
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { TouchableOpacity } from 'react-native';

export default class Living extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const {
            name,
            author,
            date,
            day,
            hours,
            location,
            benefits,
            cleaner
        } = this.props.data[1];
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
                        padding: 5
                    }}>
                        <Col style={{
                            padding: 5
                        }}>
                            <Row>
                                <Icon type="MaterialIcons" name="cleaning-services" />
                                <H2>
                                    {name}
                                </H2>
                            </Row>
                            <Row>
                                <Icon name="md-person-outline" />
                                <Text>
                                    By
                                        </Text>
                                <Text>{" "}</Text>
                                <Text>
                                    {author}
                                </Text>
                            </Row>
                            <Row>
                                <Icon name="md-calendar-sharp" />
                                <Text>
                                    {date}
                                </Text>
                                <Text>{' '}</Text>
                                <Text>
                                    {day}
                                </Text>
                            </Row>
                            <Row>
                                <Icon name="md-time-outline" />
                                <Text>
                                    {hours} Hour Clean
                                        </Text>
                            </Row>
                            <Row>
                                <Icon name="md-location-outline" />
                                <Text>
                                    {location}
                                </Text>
                            </Row>
                        </Col>
                    </Grid>
                    <Grid style={{
                        borderBottomColor: "#05dee2",
                        borderBottomWidth: 3,
                        padding: 5
                    }}>
                        <Col style={{
                            padding: 5
                        }}>
                            <Row>
                                <Icon type="FontAwesome5" name="hand-holding-heart" />
                                <H3>
                                    Benefit
                                        </H3>
                            </Row>
                            {
                                benefits.map((v, i) => (
                                    <Row key={i}>
                                        <Icon name="md-checkbox-outline" />
                                        <Text>
                                            {v}
                                        </Text>
                                    </Row>
                                ))
                            }
                            <Row>
                                <Icon type="MaterialIcons" name="more-vert" />
                                <TouchableOpacity>
                                    <Text>
                                        See More
                                            </Text>
                                </TouchableOpacity>
                            </Row>
                        </Col>
                    </Grid>
                    <Grid style={{ padding: 5 }}>
                        <Col size={40}>
                            <Button style={{ backgroundColor: "#05dee2", elevation: 0, borderColor: "white", borderWidth: 3 }}>
                                <Text style={{ color: "#FFFFFF" }}>Clean</Text>
                            </Button>
                        </Col>
                        <Col size={20}>
                            <Text></Text>
                        </Col>
                        <Col size={40}>
                            <Button block transparent style={{ elevation: 0 }}>
                                <Text>
                                    <Text style={{ color: "#000000" }}>{cleaner} Cleaner</Text>
                                </Text>
                            </Button>
                        </Col>
                    </Grid>
                </CardItem>
            </Card>
        );
    }
}