/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import Main from './src/overview/Main';
import SignUp from './src/signup/SignUp';
import Login from './src/login/Login';

Navigation.registerComponent('Main', () => Main);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Login', () => Login);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Main'
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
                    duration: 400,
                }
            },
            waitForRender: true
        },
        pop: {
            content: {
                alpha: {
                    from: 1,
                    to: 0,
                    duration: 400,
                }
            },
            waitForRender: true
        }
    }
})