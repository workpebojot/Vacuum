import * as React from 'react';
import * as Library from '../../abstract-library';
import * as Helper from '../../abstract-helper';

export default class TopicDescriptionAndTaskDialog extends React.Component {

    constructor(props) {
        super(props);
        this.value = props.value;
        this.deleted = props.deleted;
        this.state = { animation: [] }
        this.dialog = new Helper.DialogMethod();
        this.cleanbutton = new Helper.CleanButtonMethod
            (
                {
                    animation: this.animation.bind(this),
                    deleted: this.deleted
                }
            );
    }

    animation(translated) {
        return this.state.animation.filter(v => v[translated])[0][translated];
    }

    render() {
        return (
            <Library.Native.TouchableOpacity
                onPress={() => this.dialog.topicDescriptionAndTaskDialogMethod(this.value)}
                style={{ flex: 1, flexDirection: "row" }}>
                <Library.Base.Left>
                    <Library.Base.Thumbnail source={this.value.image} />
                </Library.Base.Left>
                <Library.Base.Body>
                    <Library.Base.Text style={{ color: "#000000" }}>{`${this.value.author.first} ${this.value.author.last}`}</Library.Base.Text>
                    <Library.Base.Text note>
                        <Library.Base.Text style={{ fontWeight: "bold" }}>{this.value.name}</Library.Base.Text> room with
                                                    <Library.Base.Text style={{ fontWeight: "bold" }}>{" "}{this.value.reward} Pesos</Library.Base.Text>{" "}Bounty.{" "}
                                                    Starting on <Library.Base.Text style={{ fontWeight: "bold" }}>{`${this.value.date} ${this.value.day}`}{" "}</Library.Base.Text> at
                                                    <Library.Base.Text style={{ fontWeight: "bold" }}>{" "}{this.value.location}</Library.Base.Text>
                    </Library.Base.Text>
                </Library.Base.Body>
                <Library.Base.Right style={{ justifyContent: "center", alignItems: "center" }}>
                    <Library.Base.Button
                        transparent
                        style={{
                            borderRadius: 100,
                            elevation: 0,
                            alignSelf: "center",
                            margin: 5,
                            padding: 5,
                            backgroundColor: "#e4f7fd"
                        }}
                        onPress={() => this.cleanbutton.findJobTopicCleanButton(this.value.id)}>
                        <Library.Animated
                            source={require('../../assets/animation/lottie/8489-clean.json')}
                            style={{ width: 50, height: 50 }}
                            ref={animation => {
                                const translated = String.fromCharCode(97 + this.value.id);
                                const object = {};
                                object[translated] = animation;
                                this.state.animation.push(object);
                            }}
                        />
                    </Library.Base.Button>
                </Library.Base.Right>
            </Library.Native.TouchableOpacity>
        );
    }
}