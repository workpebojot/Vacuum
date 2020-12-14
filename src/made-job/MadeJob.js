import * as React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Button, Title, Icon } from 'native-base';
import HomeFooter from '../utilities/home-footer';

export default class MadeJob extends React.Component {
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
                    <Card>
                        <CardItem header>
                            <Text>Made Job</Text>
                        </CardItem>
                    </Card>
                </Content>
                <HomeFooter {...this.props} page="Made Job" />
            </Container>
        );
    }
}