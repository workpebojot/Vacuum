import * as React from 'react';
import * as Template from '../../abstract-template';
import * as Library from '../../abstract-library';
import * as Data from '../../abstract-data';

export default class MadeJob extends React.Component {

    state = {
        data: []
    }

    deleteMade(id) {
        const newArray = this.state.data.filter(v => v.id != id);
        this.state.data = newArray;
        this.setState({ data: this.state.data });
    }


    render() {
        return (
            <Library.Base.Container>
                <Library.Base.Header style={{
                    backgroundColor: "#05dee2",
                    marginTop: "7.5%",
                    elevation: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center"
                }}>
                    <Library.Base.Title>Made Job</Library.Base.Title>
                </Library.Base.Header>
                {
                    (this.state.data.length !== 0) ? (
                        <Library.Base.Content padder>
                            <Library.Base.List>
                                <Library.Base.ListItem itemDivider>
                                    <Library.Base.Text>Latest</Library.Base.Text>
                                </Library.Base.ListItem>
                                {this.state.data.map((value, key) => (
                                    <Library.Base.ListItem key={key}>
                                        <Library.Box.Grid>
                                            <Library.Box.Col style={{ justifyContent: 'flex-start' }}>
                                                <Library.Base.Text style={{ alignSelf: 'flex-start' }}>
                                                    {`${value.name} Room`}
                                                </Library.Base.Text>
                                                <Library.Base.Text note style={{ alignSelf: 'flex-start' }}>
                                                    {`Created at ${value.date}`}
                                                </Library.Base.Text>
                                            </Library.Box.Col>
                                            <Library.Box.Col style={{ justifyContent: 'flex-end' }}>
                                                <Library.Base.Button
                                                    onPress={() => this.deleteMade(value.id)}
                                                    style={{
                                                        alignSelf: "flex-end",
                                                        backgroundColor: "#fcc4c3"
                                                    }}>
                                                    <Library.Base.Text>Delete</Library.Base.Text>
                                                </Library.Base.Button>
                                            </Library.Box.Col>
                                        </Library.Box.Grid>
                                    </Library.Base.ListItem>
                                ))
                                }
                            </Library.Base.List>
                        </Library.Base.Content>
                    ) : (
                            <Library.Box.Grid>
                                <Library.Box.Col style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Library.Animated
                                        source={require('../../assets/animation/lottie/8021-empty-and-lost.json')}
                                        style={{ alignSelf: "center" }}
                                        autoSize
                                        autoPlay
                                        resizeMode="center" />
                                </Library.Box.Col>
                            </Library.Box.Grid>
                        )
                }

                <Template.Footer {...this.props} page="Made Job" />
            </Library.Base.Container>
        );
    }

    componentDidMount() {
        Library.Native.BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        this.state.data = Data.Data.user;
        this.setState({ data: this.state.data });
    }

    componentWillUnmount() {
        Library.Native.BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        return true;
    }
}