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
    H3
} from 'native-base';
import { BackHandler } from 'react-native';

export default class SetupProfile extends React.Component {
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
                                <Button
                                    rounded
                                    block
                                    style={{ backgroundColor: "#FCC4C3", elevation: 0 }}
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