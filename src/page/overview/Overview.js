import * as React from 'react';
import * as Library from '../../abstract-library';
import * as Data from '../../abstract-data';
import * as Template from '../../abstract-template';

export default class Overview extends React.Component {
    render() {
        return (
            <Library.Base.Container style={{ backgroundColor: "#05dee2" }}>
                <Library.Base.Header
                    androidStatusBarColor="#05dee2"
                    noLeft
                    transparent>
                    <Library.Base.Left style={{ flex: 1, margin: 10 }}>
                        <Library.Native.Pressable
                            android_ripple={{ color: "#fcc4c3", borderless: true }}
                            onPress={
                                () => Library.Nav.push(this.props.componentId, {
                                    component: {
                                        name: "Login"
                                    }
                                })}>
                            <Library.Base.Text style={{ color: "white" }}>Login</Library.Base.Text>
                        </Library.Native.Pressable>
                    </Library.Base.Left>
                    <Library.Base.Body style={{ flex: 1 }}>
                        <Library.Base.Button transparent block>
                            <Library.Base.Title>Vacuum</Library.Base.Title>
                        </Library.Base.Button>
                    </Library.Base.Body>
                    <Library.Base.Right style={{ flex: 1, margin: 10 }}>
                        <Library.Native.Pressable
                            android_ripple={{ color: "#fcc4c3", borderless: true }}
                            onPress={
                                () => Library.Nav.push(this.props.componentId, {
                                    component: {
                                        name: "SignUp"
                                    }
                                })}>
                            <Library.Base.Text style={{ color: "white" }}>
                                Signup
                        </Library.Base.Text>
                        </Library.Native.Pressable>
                    </Library.Base.Right>
                </Library.Base.Header>
                <Library.Base.Content padder>
                    {
                        Data.Data.user.map((value, key) => {
                            return <Template.Clean page={"Overview"} key={key} data={value} />;
                        })
                    }
                </Library.Base.Content>
            </Library.Base.Container>
        );
    }

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        Library.SplashScreen.hide();
    }
}