import * as React from 'react';
import * as Library from '../../abstract-library';

export default class SelectTask extends React.Component {
    render() {
        return (
            <Library.Box.Grid>
                <Library.Box.Row size={20} style={{ backgroundColor: "#fcc4c3" }}>
                    <Library.Box.Col style={{ justifyContent: "center", alignItems: "center", alignContent: "center" }}>
                        <Library.Base.Title>Select Task</Library.Base.Title>
                    </Library.Box.Col>
                </Library.Box.Row>
                <Library.Box.Row size={60} style={{ backgroundColor: "#fcc4c3" }}>
                    <Library.Box.Col
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            position: "relative",
                            zIndex: -1
                        }}>
                        <Library.Animated
                            source={require('../../assets/animation/lottie/10646-office.json')}
                            style={{ alignSelf: "center" }}
                            ref={animation => {
                                this.task = animation;
                            }}
                            autoSize
                            resizeMode="center" />
                        <Library.Box.Row style={{ position: "absolute", alignSelf: "center", zIndex: 1, flexDirection: "column" }}>
                            <Library.Native.TouchableOpacity
                                onPress={() => Library.Nav.push(this.props.componentId, {
                                    component: {
                                        name: "FindJob",
                                        passProps: {
                                            props: this.props
                                        }
                                    }
                                })}
                                style={{
                                    flexDirection: "column",
                                    flex: 1,
                                    zIndex: 2,
                                    margin: 10
                                }}>
                                <Library.Box.Col style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#05dee2",
                                    alignContent: "center",
                                    margin: 10,
                                    height: 50,
                                    borderRadius: 5,
                                    opacity: 0.8
                                }}>
                                    <Library.Base.H3 style={{ color: "#ffffff", alignSelf: "center", margin: 10, fontWeight: "bold" }}>Find Job</Library.Base.H3>
                                </Library.Box.Col>
                            </Library.Native.TouchableOpacity>
                            <Library.Native.TouchableOpacity
                                onPress={() => Library.Nav.push(this.props.componentId, {
                                    component: {
                                        name: "CreateJob",
                                        passProps: {
                                            props: this.props
                                        }
                                    }
                                })}
                                style={{
                                    flexDirection: "column",
                                    flex: 1,
                                    zIndex: 2,
                                    margin: 10
                                }}>
                                <Library.Box.Col style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#05dee2",
                                    alignContent: "center",
                                    margin: 10,
                                    height: 50,
                                    borderRadius: 5,
                                    opacity: 0.8
                                }}>
                                    <Library.Base.H3 style={{ color: "#ffffff", alignSelf: "center", margin: 10, fontWeight: "bold" }}>Create Job</Library.Base.H3>
                                </Library.Box.Col>
                            </Library.Native.TouchableOpacity>
                        </Library.Box.Row>
                    </Library.Box.Col>
                </Library.Box.Row>
                <Library.Box.Row size={20} style={{ backgroundColor: "#fcc4c3" }}>

                </Library.Box.Row>
            </Library.Box.Grid>
        );
    }

    componentDidMount() {
        Library.Native.BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
        this.task.play();
    }

    componentWillUnmount() {
        Library.Native.BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        return true;
    }
}