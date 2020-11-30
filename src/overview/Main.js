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
    Thumbnail,
    List,
    ListItem
} from 'native-base';
import SplashScreen from 'react-native-splash-screen';

export default class Main extends React.Component {
    render() {
        return (
            <Container style={{ backgroundColor: "#05dee2" }}>
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
                        <List>
                            <ListItem itemDivider>
                                <Text>Description</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Aaron Bennet</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Ali Connors</Text>
                            </ListItem>
                            <ListItem itemDivider>
                                <Text>Des</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Bradley Horowitz</Text>
                            </ListItem>
                        </List>
                        <CardItem style={{ borderRadius: 10 }}>
                            <Left style={{ flex: 1 }}>
                                <Button rounded style={{ backgroundColor: "#05dee2", elevation: 0 }}>
                                    <Text style={{ color: "#FFFFFF" }}>Let's Clean</Text>
                                </Button>
                            </Left>
                            <Right style={{ flex: 1 }}>
                                <Button rounded style={{ backgroundColor: "#05dee2", elevation: 0 }}>
                                    <Text style={{ color: "#FFFFFF" }}>25 Cleaner</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
}