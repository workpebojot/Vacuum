import * as React from 'react';
import {
    Container,
    Content
} from 'native-base';
import Head from './../header/header';
import Clean from './../type/clean';

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
                    {
                        this.props.data.map((value, key) => {
                            const page = "Overview";
                            return <Clean page={page} key={key} data={value} />;
                        })
                    }
                </Content>
            </Container>
        );
    }
}