/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => (
    <View style={styles.root}>
        <Text>Home Screen</Text>
    </View>
)

Navigation.registerComponent('Home', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Home'
                        }
                    }
                ]
            }
        }
    });
});

const styles = StyleSheet.create({
    root: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "whitesmoke"
    }
})