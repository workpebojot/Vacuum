
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Text,
    Item,
    Input,
    Label,
    Card,
    CardItem,
    H3,
    Icon,
    Footer,
    FooterTab
} from 'native-base';

export default class SignUp extends React.Component {
    render() {
        return (
            <Container style={{ backgroundColor: "#fcc4c3" }}>
                <Header noLeft transparent>
                    <Left style={{ flex: 1, margin: 10 }}>
                        <Text
                            style={{ color: "white" }}
                            onPress={
                                () => Navigation.pop(this.props.componentId)
                            }
                        >
                            Back
                        </Text>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Button transparent block>
                            <Title>Login</Title>
                        </Button>
                    </Body>
                    <Right style={{ flex: 1, margin: 10 }}>
                        <Text
                            style={{ color: "white" }}
                            onPress={
                                () => Navigation.pop(this.props.componentId)
                            }
                        >
                            Vacuum
                            </Text>
                    </Right>
                </Header>
                <Content padder>
                    <Card transparent style={{ borderRadius: 10, padding: 5 }}>
                        <CardItem style={{ borderRadius: 10, padding: 10 }}>
                            <Body style={{ padding: 10 }}>
                                <Item floatingLabel>
                                    <Icon type="MaterialIcons" name='email' />
                                    <Label>Email</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel>
                                    <Icon name='lock-closed' />
                                    <Label>Password</Label>
                                    <Input />
                                </Item>
                                <Text>
                                    {'\n'}
                                </Text>
                                <Button rounded block style={{ backgroundColor: "#FCC4C3", elevation: 0 }}>
                                    <H3 style={{ color: "#FFFFFF" }}>Login</H3>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Footer style={{elevation: 0}}>
                    <FooterTab style={{backgroundColor: "#fcc4c3", borderWidth: 1, borderColor: "#fcc4c3"}}>
                        <Button transparent block style={{ elevation: 0 }}>
                            <Text style={{ color: "#ffffff" }}>
                                Vacuum Version 1.0.0 2020-2021
                                    </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}