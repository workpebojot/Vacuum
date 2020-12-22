import * as React from 'react';
import * as Library from '../../abstract-library';
import * as Helper from '../../abstract-helper';

Library.Native.UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Clean extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            page: props.page,
            value: props.data,
            animation: [props.data]
        }
        this.deleted = props.deleted;
        this.storage = new Helper.StorageMethod();
        this.dialog = new Helper.DialogMethod();
    }

    state = {
        expand: [],
        animation: [],
        open: false,
        value: {},
        page: ""
    }

    CleanExpand(condition) {

        if (condition) {
            this.state.open = false;
            this.setState({ open: this.state.open });
            this.state.expand = [];
            this.setState({ expand: this.state.expand });
        } else {
            this.state.open = true;
            this.setState({ open: this.state.open });
            const value = this.state.animation;
            this.state.expand = value;
            this.setState({ expand: this.state.expand })
        }
    }

    async typeCleanCheck(key, page) {
        switch (page) {
            case "Overview":
                this.demoCleanButton();
                break;
            case "Find Job":
                await this.CleanNow(key);
            default:
                break;

        }
    }

    demoCleanButton() {
        this.clean.play();
        setTimeout(() => {
            this.clean.pause()
        }, 2000)
    }

    async CleanNow(key) {
        try {
            this.clean.play();
            setTimeout(async () => {
                this.clean.pause();
                this.deleted(key);
                const value = "" + key;
                await this.storage.StoreData("cleaning", value);
            }, 2000)
        } catch (e) {
            console.log(e.message);
        }
    }



    CleanType(type) {
        switch (type) {
            case "Kitchen":
                return require('../../assets/animation/lottie/32854-specific-latent-heat-vaporization-question.json');
            case "Living":
                return require('../../assets/animation/lottie/37176-living-room.json');
            case "Wash":
                return require('../../assets/animation/lottie/3138-washing-machine.json');
            default:
                break;
        }
    }

    render() {
        return (
            <Library.Base.Card key={this.state.value.key} style={{ borderRadius: 10, elevation: 0 }}>
                <Library.Base.CardItem
                    style={{
                        borderRadius: 10,
                        flexDirection: "column",
                        borderColor: "#fcc4c3",
                        borderWidth: 3
                    }}>
                    <Library.Box.Grid style={{
                        borderBottomColor: "#fcc4c3",
                        borderBottomWidth: 3,
                        borderTopColor: "#05dee2",
                        borderTopWidth: 3,
                        padding: 5
                    }}>
                        <Library.Box.Col style={{
                            padding: 5,
                            backgroundColor: "#e4f7fd",
                            borderRadius: 10
                        }}>
                            <Library.Box.Row style={{ margin: 5 }}>
                                <Library.Box.Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Library.Animated
                                        source={this.CleanType(this.state.value.name)}
                                        style={{ width: 50, height: 50 }}
                                        autoPlay
                                        ref={animation => {
                                            const animated = animation;
                                            if (animated !== null) {
                                                animated.play()
                                                setTimeout(() => {
                                                    animated.pause()
                                                }, 2000)
                                            }
                                        }} />
                                </Library.Box.Col>
                                <Library.Box.Col size={80} style={{
                                    justifyContent: "center",
                                    backgroundColor: "#fcc4c3",
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                    paddingLeft: 5,
                                    flexDirection: "row"
                                }}>
                                    <Library.Box.Row style={{ alignItems: "center", justifyContent: "center", padding: 10, color: "#ffffff" }}>
                                        <Library.Base.H2>
                                            {this.state.value.name}{" Room"}
                                        </Library.Base.H2>
                                    </Library.Box.Row>
                                    <Library.Box.Row style={{ alignItems: "center", justifyContent: "center", padding: 10, flexDirection: "column", backgroundColor: "#ffffff" }}>
                                        <Library.Box.Col style={{ borderBottomColor: "#fcc4c3", borderBottomWidth: 3, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                            <Library.Animated
                                                source={require('../../assets/animation/lottie/19995-money-stack.json')}
                                                style={{ width: 50, height: 50 }}
                                                autoPlay
                                                ref={animation => {
                                                    const animated = animation;
                                                    if (animated !== null) {
                                                        animated.play()
                                                        setTimeout(() => {
                                                            animated.pause()
                                                        }, 2000)
                                                    }
                                                }} />
                                            <Library.Base.Text>Bounty</Library.Base.Text>
                                        </Library.Box.Col>
                                        <Library.Box.Col>
                                            <Library.Base.Text>
                                                {this.state.value.reward}{' Pesos'}
                                            </Library.Base.Text>
                                        </Library.Box.Col>
                                    </Library.Box.Row>
                                </Library.Box.Col>
                            </Library.Box.Row>
                            <Library.Box.Row style={{ margin: 5 }}>
                                <Library.Box.Col size={20} style={{ justifyContent: "center", alignItems: "center", margin: 5 }}>
                                    <Library.Native.Image
                                        source={this.state.value.image}
                                        style={{ borderRadius: 100, width: 50, height: 50 }} />
                                </Library.Box.Col>
                                <Library.Box.Col size={60} style={{ justifyContent: "center", flexDirection: "row-reverse", margin: 5 }}>
                                    <Library.Native.TouchableOpacity
                                        onPress={() => {
                                            Library.Native.LayoutAnimation.configureNext(Library.Native.LayoutAnimation.Presets.spring);
                                            this.CleanExpand(this.state.open)
                                        }}
                                        style={{ flexDirection: "row", flex: 1 }}>
                                        <Library.Box.Row style={{
                                            alignItems: "center",
                                            backgroundColor: "#05dee2",
                                            elevation: 0,
                                            borderColor: "white",
                                            borderBottomColor: "#fcc4c3",
                                            borderBottomWidth: 3,
                                            margin: 5
                                        }}>
                                            <Library.Box.Col style={{ alignItems: "center" }}>
                                                <Library.Base.Text style={{ color: "#ffffff" }}>See More</Library.Base.Text>
                                            </Library.Box.Col>
                                        </Library.Box.Row>
                                    </Library.Native.TouchableOpacity>
                                    <Library.Box.Row style={{ alignItems: "center" }}>
                                        <Library.Base.Text>
                                            {'By '}{this.state.value.author.first}{" "}{this.state.value.author.last}

                                        </Library.Base.Text>
                                    </Library.Box.Row>
                                </Library.Box.Col>
                            </Library.Box.Row>
                            {
                                this.state.expand.length === 0 ? <Library.Base.Text></Library.Base.Text> : (
                                    <>
                                        <Library.Box.Row style={{ backgroundColor: "#e5f8f5", borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
                                            <Library.Box.Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                <Library.Animated
                                                    source={require('../../assets/animation/lottie/24189-calendar-date.json')}
                                                    style={{ width: 50, height: 50 }}
                                                    autoPlay
                                                    ref={animation => {
                                                        const animated = animation;
                                                        if (animated !== null) {
                                                            animated.play()
                                                            setTimeout(() => {
                                                                animated.pause()
                                                            }, 2000)
                                                        }
                                                    }} />
                                            </Library.Box.Col>
                                            <Library.Box.Col size={80} style={{ justifyContent: "center" }}>
                                                <Library.Base.Text>
                                                    {this.state.expand[0].date}{' '}{this.state.expand[0].day}
                                                </Library.Base.Text>
                                            </Library.Box.Col>
                                        </Library.Box.Row>
                                        <Library.Box.Row key={2} style={{ backgroundColor: "#e4f7fd" }}>
                                            <Library.Box.Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                <Library.Animated
                                                    source={require('../../assets/animation/lottie/34851-clock-12-hours')}
                                                    style={{ width: 50, height: 50 }}
                                                    autoPlay
                                                    ref={animation => {
                                                        const animated = animation;
                                                        if (animated !== null) {
                                                            animated.play()
                                                            setTimeout(() => {
                                                                animated.pause()
                                                            }, 2000)
                                                        }
                                                    }} />
                                            </Library.Box.Col>
                                            <Library.Box.Col size={80} style={{ justifyContent: "center" }}>
                                                <Library.Base.Text>{this.state.expand[0].hours} Hour Clean</Library.Base.Text>
                                            </Library.Box.Col>
                                        </Library.Box.Row>
                                        <Library.Box.Row key={3} style={{ backgroundColor: "#e5f8f5" }}>
                                            <Library.Box.Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                <Library.Animated
                                                    source={require('../../assets/animation/lottie/11422-travel-icons-map.json')}
                                                    style={{ width: 50, height: 50 }}
                                                    autoPlay
                                                    ref={animation => {
                                                        const animated = animation;
                                                        if (animated !== null) {
                                                            animated.play()
                                                            setTimeout(() => {
                                                                animated.pause()
                                                            }, 2000)
                                                        }
                                                    }} />
                                            </Library.Box.Col>
                                            <Library.Box.Col size={80} style={{ justifyContent: "center" }}>
                                                <Library.Base.Text>
                                                    {this.state.expand[0].location}
                                                </Library.Base.Text>
                                            </Library.Box.Col>
                                        </Library.Box.Row>
                                        <Library.Native.TouchableOpacity
                                            key={4}
                                            onPress={() => this.dialog.topicDescriptionAndTaskDialogMethod(this.state.expand[0])}>
                                            <Library.Box.Row style={{ backgroundColor: "#e4f7fd", borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                                                <Library.Box.Col size={20} style={{ justifyContent: "center", alignItems: "center" }}>
                                                    <Library.Animated
                                                        source={require('../../assets/animation/lottie/20542-bag-with-stuff.json')}
                                                        style={{ width: 50, height: 50 }}
                                                        autoPlay
                                                        ref={animation => {
                                                            const animated = animation;
                                                            if (animated !== null) {
                                                                animated.play()
                                                                setTimeout(() => {
                                                                    animated.pause()
                                                                }, 2000)
                                                            }
                                                        }} />
                                                </Library.Box.Col>
                                                <Library.Box.Col size={80} style={{ justifyContent: "center" }}>
                                                    <Library.Base.Text>Task</Library.Base.Text>
                                                </Library.Box.Col>
                                            </Library.Box.Row>
                                        </Library.Native.TouchableOpacity>
                                    </>
                                )
                            }
                        </Library.Box.Col>
                    </Library.Box.Grid>
                    <Library.Box.Grid style={{ margin: 10 }}>
                        <Library.Box.Col
                            size={40}
                            style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}>

                            <Library.Native.TouchableOpacity onPress={() => this.typeCleanCheck(this.state.value.id, this.state.page)}>
                                <Library.Animated
                                    source={require('../../assets/animation/lottie/8489-clean.json')}
                                    style={{ width: 50, height: 50 }}
                                    ref={animation => {
                                        this.clean = animation;
                                    }} />
                            </Library.Native.TouchableOpacity>
                        </Library.Box.Col>
                        <Library.Box.Col size={20}>
                            <Library.Base.Text></Library.Base.Text>
                        </Library.Box.Col>
                        <Library.Box.Col size={40}>
                            <Library.Base.Button block transparent style={{ elevation: 0 }}>
                                <Library.Base.Text style={{ borderBottomColor: "#05dee2", borderBottomWidth: 3 }}>
                                    <Library.Base.Text style={{ color: "#000000" }}>{this.state.value.cleaner} Cleaner</Library.Base.Text>
                                </Library.Base.Text>
                            </Library.Base.Button>
                        </Library.Box.Col>
                    </Library.Box.Grid>
                </Library.Base.CardItem>
            </Library.Base.Card>
        );
    }
}