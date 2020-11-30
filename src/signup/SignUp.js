
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
    Icon,
    H3,
    Picker
} from 'native-base';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        }
    }

    onValueChange2(value) {
        this.setState({
            selected2: value
        })
    }

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
                            <Title>Sign Up</Title>
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
                                    <Icon type="MaterialIcons" name='email' />
                                    <Label>Email</Label>
                                    <Icon name='information-circle' />
                                    <Input />
                                </Item>
                                {/* <Item floatingLabel disabled>
                                    <Label style={{ color: "gray" }}>Dingalan</Label>
                                    <Input disabled />
                                    <Icon name='location' />
                                </Item> */}
                                <Item floatingLabel>
                                    <Icon name='lock-closed' />
                                    <Label>Password</Label>
                                    <Input />
                                </Item>
                                <Text>
                                    {'\n'}
                                </Text>
                                <Button rounded block style={{ backgroundColor: "#FCC4C3", elevation: 0 }}>
                                    <H3 style={{ color: "#FFFFFF" }}>Let's Clean</H3>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container >
        );
    }
}