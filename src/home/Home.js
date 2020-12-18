import * as React from 'react';
import { BackHandler } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Button, Title, Icon } from 'native-base';
import HomeFooter from '../utilities/home-footer';

export default class Home extends React.Component {
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
                    <Title>Home</Title>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem header>
                            <Text>Home</Text>
                        </CardItem>
                    </Card>
                </Content>
                <HomeFooter {...this.props} page="Home" />
            </Container>
        );
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        return true;
    }

}