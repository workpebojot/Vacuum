import * as React from 'react';
import AsyncStorageMethod from './/async-storage';

export default class CleanButonMethod extends React.Component {

    constructor(props) {
        super(props);
        this.storage = new AsyncStorageMethod();
        this.animation = props.animation;
    }

    async findJobTopicCleanButton(key) {
        const translated = String.fromCharCode(97 + key);
        const animated = this.animation(translated);
        try {
            animated.play();
            setTimeout(async () => {
                animated.pause();
                this.deleted(key);
                const value = "" + key;
                await this.storage.StoreData("cleaning", value);
            }, 2000)
        } catch (e) {
            console.log(e.message);
        }
    }
}