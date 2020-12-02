import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import SampleInterface from './../interface/sample-interface';
import SampleData from './../data/sample-data';

export default class OverView extends React.Component {
    render() {
        return (
            <SampleInterface data={SampleData} {...this.props} />
        );
    }

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
}