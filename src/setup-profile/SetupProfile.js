import * as React from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Card,
    Text,
    CardItem,
    Item,
    Icon,
    Label,
    Input,
    H3,
    Picker
} from 'native-base';
import { BackHandler, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class SetupProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        });
    }

    render() {
        return (
            <Container style={{ backgroundColor: "#05dee2" }}>
                <Header noLeft transparent>
                    <Left style={{ flex: 1, margin: 10 }}>

                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Button transparent block>
                            <Title>Setup</Title>
                        </Button>
                    </Body>
                    <Right style={{ flex: 1, margin: 10 }}>

                    </Right>
                </Header>
                <Content padder>
                    <Card transparent style={{ borderRadius: 10, padding: 5, marginTop: -10 }}>
                        <CardItem style={{ borderRadius: 10, padding: 10, flexDirection: "column" }}>
                            <Grid>
                                <Col>
                                    <Row></Row>
                                    <Row>
                                        <Col></Col>
                                        <Image style={{ width: 200, height: 200, borderRadius: 100, backgroundColor: "gray" }} source={{ uri: ' ' }} />
                                        <Col></Col>
                                    </Row>
                                    <Row></Row>
                                </Col>
                            </Grid>
                            <Body style={{ padding: 10 }}>
                                <Item floatingLabel>
                                    <Icon type="AntDesign" name="user" />
                                    <Label>First Name</Label>
                                    <Input maxLength={20} />
                                </Item>
                                <Item floatingLabel>
                                    <Icon name='lock-closed' />
                                    <Label>Last Name</Label>
                                    <Input maxLength={20} />
                                </Item>
                                <Grid>
                                    <Col>
                                        <Item picker>
                                            <Icon name='location' />
                                            <Picker
                                                mode="dropdown"
                                                iosIcon={<Icon name="arrow-down" />}
                                                style={{ width: undefined }}
                                                placeholder="Select your SIM"
                                                placeholderStyle={{ color: "#bfc6ea" }}
                                                placeholderIconColor="#007aff"
                                                selectedValue={this.state.selected2}
                                                onValueChange={this.onValueChange2.bind(this)}
                                            >
                                                <Picker.Item label="Paltic" value="key0" />
                                                <Picker.Item label="Aplaya" value="key1" />
                                                <Picker.Item label="Butas Na Bato" value="key2" />
                                                <Picker.Item label="Matawe" value="key3" />
                                                <Picker.Item label="Caragsacan" value="key4" />
                                                <Picker.Item label="Davildavilan" value="key4" />
                                                <Picker.Item label="Dikapanikian" value="key4" />
                                                <Picker.Item label="Ibona" value="key4" />
                                                <Picker.Item label="Poblacion" value="key4" />
                                                <Picker.Item label="Tanawan" value="key4" />
                                                <Picker.Item label="Umiray" value="key4" />
                                            </Picker>
                                            <Icon name='information-circle'/>
                                        </Item>
                                    </Col>
                                </Grid>
                                <Text>
                                    {'\n'}
                                </Text>
                                <Button
                                    rounded
                                    block
                                    style={{ backgroundColor: "#05dee2", elevation: 0 }}
                                >
                                    <H3 style={{ color: "#FFFFFF" }}>Let's Clean</H3>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }

    /* componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        return true;
    } */
}