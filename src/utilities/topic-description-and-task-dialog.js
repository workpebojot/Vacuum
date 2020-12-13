import * as React from 'react';
import { Button, Text, Right, Left, Body, Thumbnail } from 'native-base';
import { TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import DialogMethod from './/method/dialog';
import AsyncStorageMethod from './../utilities/method/async-storage';

export default class TopicDescriptionAndTaskDialog extends React.Component {

    constructor(props) {
        super(props);
        this.value = props.value;
        this.deleted = props.deleted;
        this.state = { animation: [] }
        this.dialog = new DialogMethod();
        this.storage = new AsyncStorageMethod();
    }

    async topicCleanNow(key) {
        const translated = String.fromCharCode(97 + key);
        const animated = this.state.animation.filter(v => v[translated])[0][translated];
        try {
            animated.play();
            setTimeout(async () => {
                animated.pause();
                this.deleted(key)
                const value = "" + key;
                await this.storage.StoreData("deleted", value);
            }, 2000)
        } catch (e) {
            console.log(e.message);
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.dialog.topicDescriptionAndTaskDialogMethod(this.value)}
                style={{ flex: 1, flexDirection: "row" }}>
                <Left>
                    <Thumbnail source={this.value.image} />
                </Left>
                <Body>
                    <Text style={{ color: "#000000" }}>{`${this.value.author.first} ${this.value.author.last}`}</Text>
                    <Text note>
                        <Text style={{ fontWeight: "bold" }}>{this.value.name}</Text> room with
                                                    <Text style={{ fontWeight: "bold" }}>{" "}{this.value.reward} Pesos</Text>{" "}Bounty.{" "}
                                                    Starting on <Text style={{ fontWeight: "bold" }}>{`${this.value.date} ${this.value.day}`}{" "}</Text> at
                                                    <Text style={{ fontWeight: "bold" }}>{" "}{this.value.location}</Text>
                    </Text>
                </Body>
                <Right style={{ justifyContent: "center", alignItems: "center" }}>
                    <Button
                        transparent
                        style={{
                            borderRadius: 100,
                            elevation: 0,
                            alignSelf: "center",
                            margin: 5,
                            padding: 5,
                            backgroundColor: "#e4f7fd"
                        }}
                        onPress={() => this.topicCleanNow(this.value.id)}>
                        <LottieView
                            source={require('../assets/animation/lottie/8489-clean.json')}
                            style={{ width: 50, height: 50 }}
                            ref={animation => {
                                const translated = String.fromCharCode(97 + this.value.id);
                                const object = {};
                                object[translated] = animation;
                                this.state.animation.push(object);
                            }}
                        />
                    </Button>
                </Right>
            </TouchableOpacity>
        );
    }
}