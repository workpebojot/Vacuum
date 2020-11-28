/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LoginScreen = () => {
    return (
        <View style={styles.root}>
            <Button
                title="Login"
                color="#710ce3"
                onPress={() => Navigation.setRoot(mainRoot)}
            />
        </View>
    );
}

const HomeScreen = (props) => {
    return (
        <View style={styles.root}>
            <Text>Hello React Native Navigation 👋</Text>
            <Button
                title='Push Settings Screen'
                color='#710ce3'
                onPress={() => Navigation.push(props.componentId, {
                    component: {
                        name: 'Settings'
                    }
                })} />
            <Button
                title="Visit Profile"
                color="#710ce3"
                onPress={() => Navigation.push(props.componentId, {
                    component: {
                        name: "UserProfile",
                        id: "PROFILE_SCREEN_ID",
                        passProps: {
                            name: "John Doe",
                            status: "Online"
                        }
                    }
                })}
            />
        </View>
    );
};
HomeScreen.options = {
    topBar: {
        title: {
            text: 'Home'
        }
    },
    bottomTab: {
        text: 'Home'
    }
};

const MyScreen = (props) => {
    React.useEffect(() => {
        const listener = {
            componentDidAppear: () => {
                console.log("RNN", `componentDidAppear`);
            },
            componentDidDisappear: () => {
                console.log("RNN", `componentDidDisappear`);
            }
        };

        // Register the listener to all events related to our component
        const unsubscribe = Navigation.events().registerComponentListener(listener, props.componentId);

        return () => {
            unsubscribe.remove();
        }
    }, []);

    return (
        <View style={styles.root}>
            <Text>Screen Component</Text>
        </View>
    );
}

class UserProfileScreen extends React.Component {
    static options(props) {
        return {
            topBar: {
                title: {
                    text: props.name
                }
            }
        }
    }

    render() {
        return (
            <View style={styles.root}>
                <Text>User Profile</Text>
            </View>
        );
    }
}

const SettingsScreen = () => {
    return (
        <View style={styles.root}>
            <Text>Settings Screen</Text>
        </View>
    );
}
SettingsScreen.options = {
    topBar: {
        title: {
            text: 'Settings'
        }
    },
    bottomTab: {
        text: 'Settings'
    }
}

Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('UserProfile', () => UserProfileScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('MyScreen', () => MyScreen);

const mainRoot = {
    root: {
        bottomTabs: {
            children: [
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: "Home"
                                }
                            }
                        ]
                    }
                },
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: "Settings"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
}

const loginRoot = {
    root: {
        component: {
            name: "Login"
        }
    }
}

Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: '#4d089a'
    },
    topBar: {
        title: {
            color: 'white'
        },
        backButton: {
            color: 'white'
        },
        background: {
            color: '#4d089a'
        }
    },
    bottomTab: {
        fontSize: 14,
        selectedFontSize: 14
    }
});

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot(loginRoot);
});

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    }
});