/**
 * @format
 */
import { Navigation } from 'react-native-navigation';
import OverView from './src/overview/OverView';
import SignUp from './src/signup/SignUp';
import Login from './src/login/Login';
import SetupProfile from './src/setup-profile/SetupProfile';
import SelectTask from './src/select-task/SelectTask';
import CleanedJob from './src/cleaned-job/CleanedJob';
import FindJob from './src/find-job/FindJob';
import Home from './src/home/Home';
import CreateJob from './src/create-job/CreateJob';
import MadeJob from './src/made-job/MadeJob';
import Status from './src/status/status';

Navigation.registerComponent('OverView', () => OverView);
Navigation.registerComponent('SignUp', () => SignUp);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('SetupProfile', () => SetupProfile);
Navigation.registerComponent('SelectTask', () => SelectTask);
Navigation.registerComponent('FindJob', () => FindJob);
Navigation.registerComponent('CleanedJob', () => CleanedJob);
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('CreateJob', () => CreateJob);
Navigation.registerComponent('MadeJob', () => MadeJob);
Navigation.registerComponent('Status', () => Status);

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