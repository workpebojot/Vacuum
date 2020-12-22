import * as React from 'react';
import * as Library from '../../abstract-library';

export default class CleanButonMethod extends React.Component {

    constructor(props) {
        super(props);
        this.animation = props.animation;
        this.deleted = props.deleted;
    }

    async StoreData(key, value) {
        try {
            const object = await this.GetData(key);
            if (object != null) {
                const ParseObject = JSON.parse(object);
                ParseObject[value] = value;
                const StringObject = JSON.stringify(ParseObject);
                await Library.Storage.setItem(key, StringObject);
            } else {
                const deleted = {};
                deleted[value] = value;
                const StringObject = JSON.stringify(deleted);
                await Library.Storage.setItem(key, StringObject);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    async GetData(key) {
        try {
            const value = await Library.Storage.getItem(key);
            if (value !== null) {
                return value;
            }
        } catch (e) {
            console.log(e.message);
        }
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
                await this.StoreData("cleaning", value);
            }, 2000)
        } catch (e) {
            console.log(e.message);
        }
    }
}