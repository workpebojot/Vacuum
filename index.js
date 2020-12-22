import * as Library from './src/abstract-library.js';
import * as Page from './src/abstract-page.js';

// Register Component
function Register(page, component) {
    Library.Nav.registerComponent(page, component);
}

Register('Overview', () => Page.Overview);
Register('SignUp', () => Page.SignUp);
Register('Login', () => Page.Login);
Register('SetupProfile', () => Page.SetupProfile);
Register('SelectTask', () => Page.SelectTask);
Register('FindJob', () => Page.FindJob);
Register('CleanedJob', () => Page.CleanedJob);
Register('Home', () => Page.Home);
Register('CreateJob', () => Page.CreateJob);
Register('MadeJob', () => Page.MadeJob);
Register('Status', () => Page.Status);

// Listen intinial events (by default, overview page is shown first)
Library.Nav.events().registerAppLaunchedListener(async () => {
    Library.Nav.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Overview'
                        }
                    }
                ]
            }
        }
    });
});


// Set default option for "top bar", "status bar", and "animation"
Library.Nav.setDefaultOptions({
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