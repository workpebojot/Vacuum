
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
    Form,
    Item,
    Input,
    Label,
    Card,
    CardItem,
    H3
} from 'native-base';

export default class SignUp extends React.Component {
    render() {
        return (
            <Container style={{ backgroundColor: "#FCC4C3" }}>
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
                        <Text style={{ color: "white" }}>Vacuum</Text>
                    </Right>
                </Header>
                <Content padder>
                    <Card transparent style={{ borderRadius: 10, padding: 5 }}>
                        <CardItem style={{ borderRadius: 10, padding: 10 }}>
                            <Body style={{ padding: 10 }}>
                                <Item floatingLabel>
                                    <Label>Email</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel>
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
            </Container>
        );
    }
}