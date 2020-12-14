import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import {
    Button,
    Text,
    Icon,
    Footer,
    FooterTab
} from 'native-base';

export default class HomeFooter extends React.Component {

    constructor(props) {
        super(props);
        this.page = props.page;
        this.enter = (this.page == "Cleaned Job");
        this.find = (this.page == "Find Job");
        this.home = (this.page == "Home");
        this.create = (this.page == "Create Job");
        this.job = (this.page == "Made Job");
    }

    Navigate(type) {
        this.enter = (type === "Cleaned Job");
        this.find = (type === "Find Job");
        this.home = (type === "Home");
        this.create = (type === "Create Job");
        this.job = (type === "Made Job");

        if (this.enter) {
            return Navigation.push(this.props.componentId, {
                component: {
                    name: "CleanedJob",
                    options: {
                        topBar: {
                            visible: false
                        },
                        animations: {
                            push: {
                                content: {
                                    alpha: {
                                        from: 0,
                                        to: 1,
                                        duration: 100,
                                    }
                                },
                                waitForRender: true
                            }
                        }
                    }
                }
            });
        }

        if (this.find) {
            return Navigation.push(this.props.componentId, {
                component: {
                    name: "FindJob",
                    options: {
                        topBar: {
                            visible: false
                        },
                        animations: {
                            push: {
                                content: {
                                    alpha: {
                                        from: 0,
                                        to: 1,
                                        duration: 100,
                                    }
                                },
                                waitForRender: true
                            }
                        }
                    }
                }
            });
        }

        if (this.home) {
            return Navigation.push(this.props.componentId, {
                component: {
                    name: "Home",
                    options: {
                        topBar: {
                            visible: false
                        },
                        animations: {
                            push: {
                                content: {
                                    alpha: {
                                        from: 0,
                                        to: 1,
                                        duration: 100,
                                    }
                                },
                                waitForRender: true
                            }
                        }
                    }
                }
            });
        }

        if (this.create) {
            return Navigation.push(this.props.componentId, {
                component: {
                    name: "CreateJob",
                    options: {
                        topBar: {
                            visible: false
                        },
                        animations: {
                            push: {
                                content: {
                                    alpha: {
                                        from: 0,
                                        to: 1,
                                        duration: 100,
                                    }
                                },
                                waitForRender: true
                            }
                        }
                    }
                }
            });
        }

        if (this.job) {
            return Navigation.push(this.props.componentId, {
                component: {
                    name: "MadeJob",
                    options: {
                        topBar: {
                            visible: false
                        },
                        animations: {
                            push: {
                                content: {
                                    alpha: {
                                        from: 0,
                                        to: 1,
                                        duration: 100,
                                    }
                                },
                                waitForRender: true
                            }
                        }
                    }
                }
            });
        }
    }

    render() {
        return (
            <Footer>
                <FooterTab style={{ backgroundColor: "#05dee2" }}>

                    <Button
                        active={this.enter ? true : false}
                        style={{ backgroundColor: this.enter ? "#e4f7fd" : "" }}
                        badge={false}
                        vertical
                        onPress={() => this.Navigate("Cleaned Job")}>
                        {/* <Badge><Text>2</Text></Badge> */}
                        <Icon
                            name="md-checkbox-outline"
                            style={{ color: this.enter ? "#fcc4c3" : "#ffffff" }} />
                        <Text
                            style={{
                                color: this.enter ? "#fcc4c3" : "#ffffff",
                                fontSize: 7.5
                            }}>Cleaned</Text>
                    </Button>

                    <Button
                        active={this.find ? true : false}
                        style={{ backgroundColor: this.find ? "#e4f7fd" : "" }}
                        badge={false}
                        vertical
                        onPress={() => this.Navigate("Find Job")}>
                        <Icon
                            type="SimpleLineIcons"
                            name="magnifier"
                            style={{ color: this.find ? "#fcc4c3" : "#ffffff" }} />
                        <Text
                            style={{
                                color: this.find ? "#fcc4c3" : "#ffffff",
                                fontSize: 7.5
                            }}>Find</Text>
                    </Button>

                    <Button
                        active={this.home ? true : false}
                        style={{ backgroundColor: this.home ? "#e4f7fd" : "" }}
                        badge={false}
                        vertical
                        onPress={() => this.Navigate("Home")}>
                        {/* <Badge><Text>51</Text></Badge> */}
                        <Icon
                            name="md-home-outline"
                            style={{ color: this.home ? "#fcc4c3" : "#ffffff" }} />
                        <Text
                            style={{
                                color: this.home ? "#fcc4c3" : "#ffffff",
                                fontSize: 7.5
                            }}>Home</Text>
                    </Button>

                    <Button
                        active={this.create ? true : false}
                        style={{ backgroundColor: this.create ? "#e4f7fd" : "" }}
                        badge={false}
                        vertical
                        onPress={() => this.Navigate("Create Job")}>
                        <Icon
                            type="MaterialCommunityIcons"
                            name="plus-box-outline"
                            style={{ color: this.create ? "#fcc4c3" : "#ffffff" }} />
                        <Text
                            style={{
                                color: this.create ? "#fcc4c3" : "#ffffff",
                                fontSize: 7.5
                            }}>Create</Text>
                    </Button>

                    <Button
                        active={this.job ? true : false}
                        style={{ backgroundColor: this.job ? "#e4f7fd" : "" }}
                        badge={false}
                        vertical
                        onPress={() => this.Navigate("Made Job")}>
                        <Icon
                            name="md-briefcase-outline"
                            style={{ color: this.job ? "#fcc4c3" : "#ffffff" }} />
                        <Text
                            style={{
                                color: this.job ? "#fcc4c3" : "#ffffff",
                                fontSize: 7.5
                            }}>Made</Text>
                    </Button>

                </FooterTab>
            </Footer >
        );
    }
}