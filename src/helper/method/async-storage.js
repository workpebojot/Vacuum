import * as React from 'react';
import * as Library from '../../abstract-library';

export default class AsyncStorageMethod extends React.Component {

    constructor(props) {
        super(props);
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

    async GetAllKeys() {
        let keys = [];
        try {
            keys = await Library.Storage.getAllKeys();
        } catch (e) {

        }
        if (keys.length !== 0) {
            return keys;
        }
    }

    async RemoveValue(key) {
        try {
            await Library.Storage.removeItem(key)
        } catch (e) {
            // remove error
        }
    }

    async removedCleanedJob(key, value) {
        const object = await this.GetData(key);
        const ParseObject = JSON.parse(object);
        if (Object.keys(ParseObject).length == 0 || Object.keys(ParseObject).length == 1) {
            console.log("EMPTY!")
            await this.RemoveValue(key);
        } else {
            console.log("REMOVED!")
            delete ParseObject[value];
            const StringObject = JSON.stringify(ParseObject);
            await Library.Storage.setItem(key, StringObject);
        }
    }

    async Clear() {
        await Library.Storage.clear();
    }
}