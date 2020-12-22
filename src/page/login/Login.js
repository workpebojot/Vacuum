import * as React from 'react';
import * as Library from '../../abstract-library';

export default class SignUp extends React.Component {
    render() {
        return (
            <Library.Box.Grid style={{ backgroundColor: "#fcc4c3" }}>
                <Library.Box.Row size={20} style={{ backgroundColor: "#fcc4c3" }}>
                    <Library.Box.Col style={{
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center"
                    }}>
                        <Library.Native.TouchableOpacity
                            onPress={
                                () => Library.Nav.pop(this.props.componentId)
                            }
                            style={{
                                alignSelf: "flex-start",
                                marginLeft: 20
                            }}>
                            <Library.Base.Title style={{ fontSize: 16 }}>Back</Library.Base.Title>
                        </Library.Native.TouchableOpacity>
                    </Library.Box.Col>
                    <Library.Box.Col style={{
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center"
                    }}>
                        <Library.Native.TouchableOpacity>
                            <Library.Base.Title style={{ fontSize: 20 }}>Login</Library.Base.Title>
                        </Library.Native.TouchableOpacity>
                    </Library.Box.Col>
                    <Library.Box.Col
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center"
                        }}>
                        <Library.Native.TouchableOpacity
                            onPress={
                                () => Library.Nav.pop(this.props.componentId)
                            }
                            style={{
                                alignSelf: "flex-end",
                                marginRight: 20
                            }}>
                            <Library.Base.Title style={{ fontSize: 16 }}>Vacuum</Library.Base.Title>
                        </Library.Native.TouchableOpacity>
                    </Library.Box.Col>
                </Library.Box.Row>
                <Library.Box.Row size={60} style={{ backgroundColor: "#fcc4c3" }}>
                    <Library.Box.Col
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            backgroundColor: "#ffffff",
                            margin: 10,
                            borderRadius: 5,
                            padding: 10
                        }}>

                        <Library.Base.Item floatingLabel>
                            <Library.Base.Icon type="MaterialIcons" name='email' />
                            <Library.Base.Label>Email</Library.Base.Label>
                            <Library.Base.Input />
                        </Library.Base.Item>
                        <Library.Base.Item floatingLabel>
                            <Library.Base.Icon name='lock-closed' />
                            <Library.Base.Label>Password</Library.Base.Label>
                            <Library.Base.Input />
                        </Library.Base.Item>
                        <Library.Base.Text>
                            {'\n'}
                        </Library.Base.Text>
                        <Library.Base.Button
                            onPress={
                                () => Library.Nav.push(this.props.componentId, {
                                    component: {
                                        name: "Home"
                                    }
                                })
                            }
                            rounded
                            block
                            style={{
                                backgroundColor: "#FCC4C3",
                                elevation: 0
                            }}>
                            <Library.Base.H3 style={{ color: "#FFFFFF" }}>Login</Library.Base.H3>
                        </Library.Base.Button>
                    </Library.Box.Col>
                </Library.Box.Row>
                <Library.Box.Row size={20} style={{ backgroundColor: "#fcc4c3", justifyContent: "center" }}>

                    <Library.Base.Button transparent block style={{ elevation: 0, alignSelf: 'flex-end' }}>
                        <Library.Base.Text style={{ color: "#ffffff", fontSize: 12.5 }}>Vacuum Version 1.0.0 2020-2021</Library.Base.Text>
                    </Library.Base.Button>
                </Library.Box.Row>
            </Library.Box.Grid>
        );
    }
}