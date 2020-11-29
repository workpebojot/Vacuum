import { Navigation } from 'react-native-navigation';
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
    Thumbnail
} from 'native-base';

export default class Main extends React.Component {
    render() {
        return (
            <Container style={{ backgroundColor: "#FCC4C3" }}>
                <Header noLeft transparent>
                    <Left style={{ flex: 1, margin: 10 }}>
                        <Text
                            style={{ color: "white" }}
                            onPress={
                                () => Navigation.push(this.props.componentId, {
                                    component: {
                                        name: "Login"
                                    }
                                })
                            }
                        >
                            Login
                        </Text>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Button transparent block>
                            <Title>Vacuum</Title>
                        </Button>
                    </Body>
                    <Right style={{ flex: 1, margin: 10 }}>
                        <Text
                            style={{ color: "white" }}
                            onPress={
                                () => Navigation.push(this.props.componentId, {
                                    component: {
                                        name: "SignUp"
                                    }
                                })
                            }
                        >
                            Signup
                        </Text>
                    </Right>
                </Header>
                <Content padder>
                    <Card style={{ borderRadius: 10 }}>
                        <CardItem style={{ borderRadius: 10 }}>
                            <Left>
                                <Thumbnail source={{ uri: 'https://t3.ftcdn.net/jpg/02/94/26/48/240_F_294264892_ohSaYmdENfPo8Yab6xIo71qctLCSyhrc.jpg' }} />
                                <Body>
                                    <Text>Jericho Rosales</Text>
                                    <Text note>Filipino Celebrity</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem style={{ borderRadius: 10 }}>
                            <Body>
                                <Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries, but also the
                                    leap into electronic typesetting, remaining essentially unchanged.
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ borderRadius: 10 }}>
                            <Left style={{ flex: 1 }}>
                                <Button rounded style={{ backgroundColor: "#FCC4C3", elevation: 0 }}>
                                    <Text style={{ color: "#FFFFFF" }}>I Love Work</Text>
                                </Button>
                            </Left>
                            <Right style={{ flex: 1 }}>
                                <Button rounded style={{ backgroundColor: "#FCC4C3", elevation: 0 }}>
                                    <Text style={{ color: "#FFFFFF" }}>25 Worker</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}