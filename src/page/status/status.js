import * as React from 'react';
import * as Library from '../../abstract-library';
import * as Data from '../../abstract-data';

export default class Status extends React.Component {

    state = {
        madestatus: true,
        cleanedtatus: false,
        madedata: [],
        cleaneddata: []
    }

    MadeStatus() {
        this.state.madestatus = true;
        this.setState({ madestatus: this.state.madestatus });

        this.state.cleanedtatus = false;
        this.setState({ cleanedtatus: this.state.cleanedtatus });
    }

    CleanedStatus() {
        this.state.cleanedtatus = true;
        this.setState({ cleanedtatus: this.state.cleanedtatus });


        this.state.madestatus = false;
        this.setState({ madestatus: this.state.madestatus });
    }

    render() {
        return (
            <Library.Base.Container>
                <Library.Base.Header
                    hasSegment
                    androidStatusBarColor="#05dee2"
                    style={{
                        backgroundColor: "#05dee2",
                        marginTop: "7.5%",
                        elevation: 0
                    }}>
                    <Library.Base.Left>
                        <Library.Base.Button
                            onPress={
                                () => Library.Nav.pop(this.props.componentId)
                            }
                            transparent>
                            <Library.Base.Icon name='md-arrow-back-outline' />
                        </Library.Base.Button>
                    </Library.Base.Left>
                    <Library.Base.Body>
                        <Library.Base.Title>Status</Library.Base.Title>
                    </Library.Base.Body>
                </Library.Base.Header>
                <Library.Base.Segment style={{ backgroundColor: "transparent" }}>
                    <Library.Base.Button
                        onPress={this.MadeStatus.bind(this)}
                        style={{ backgroundColor: this.state.madestatus ? "#fcc4c3" : "#05dee2", padding: 10 }}
                        first
                        active={this.state.madestatus}>
                        <Library.Base.Text style={{ color: "#ffffff" }}>Made</Library.Base.Text>
                    </Library.Base.Button>
                    <Library.Base.Button
                        onPress={this.CleanedStatus.bind(this)}
                        style={{ backgroundColor: this.state.cleanedtatus ? "#fcc4c3" : "#05dee2", padding: 10 }}
                        last
                        active={this.state.cleanedtatus}>
                        <Library.Base.Text style={{ color: "#ffffff" }}>Cleaned</Library.Base.Text>
                    </Library.Base.Button>
                </Library.Base.Segment>
                <Library.Base.Content padder>
                    <Library.Base.List>
                        <Library.Base.ListItem itemDivider>
                            <Library.Base.Text>Latest {this.state.madestatus ? "Made" : "Cleaned"}</Library.Base.Text>
                        </Library.Base.ListItem>
                        {
                            this.state.madestatus && this.state.madedata.map((value, key) => (
                                <Library.Base.ListItem key={key}>
                                    <Library.Base.Text>{`${value.name} Room `}</Library.Base.Text>
                                    <Library.Base.Text note>{`${value.date}`}</Library.Base.Text>
                                </Library.Base.ListItem>
                            ))
                        }
                        {
                            this.state.cleanedtatus && this.state.cleaneddata.map((value, key) => (
                                <Library.Base.ListItem key={key}>
                                    <Library.Base.Text>{`${value.name} Room `}</Library.Base.Text>
                                    <Library.Base.Text note>{`${value.date}`}</Library.Base.Text>
                                </Library.Base.ListItem>
                            ))
                        }
                    </Library.Base.List>
                </Library.Base.Content>
            </Library.Base.Container >
        );
    }

    componentDidMount() {
        this.state.madedata = Data.Data.user;
        this.setState({ madedata: this.state.madedata });

        this.state.cleaneddata = Data.Data.user;
        this.setState({ cleaneddata: this.state.cleaneddata });
    }
}