import * as React from 'react';
import {
    Container,
    Content
} from 'native-base';
import Head from './../header/header';
import Kitchen from './../type/kitchen';
import Living from './../type/living';
import Laundry from './../type/laundry';

export default class SampleInterface extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <Container style={{ backgroundColor: "#05dee2" }}>
                <Head {...this.props} />
                <Content padder>
                    <Living data={this.props.data} />
                    <Kitchen data={this.props.data} />
                    <Laundry data={this.props.data} />
                </Content>
            </Container>
        );
    }
}