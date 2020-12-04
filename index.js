/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import OverView from './src/overview/OverView';
import SignUp from './src/signup/SignUp';
import Login from './src/login/Login';
import SetupProfile from './src/setup-profile/SetupProfile';

Navigation.registerComponent('OverView', () => OverView);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('SetupProfile', () => SetupProfile);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'OverView'
                        }
                    }
                ]
            }
        }
    });
});

Navigation.setDefaultOptions({
    topBar: {
        visible: false
    },
    statusBar: {
        visible: false
    },
    animations: {
        push: {
            content: {
                alpha: {
                    from: 0,
                    to: 1,
                    duration: 300,
                }
            },
            waitForRender: true
        },
        pop: {
            content: {
                alpha: {
                    from: 1,
                    to: 0,
                    duration: 300,
                }
            },
            waitForRender: true
        }
    }
})