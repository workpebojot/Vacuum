import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncStorageMethod extends React.Component {
    async StoreData(key, value) {
        try {
            const object = await this.GetData(key);
            if (object != null) {
                const ParseObject = JSON.parse(object);
                ParseObject[value] = value;
                const StringObject = JSON.stringify(ParseObject);
                await AsyncStorage.setItem(key, StringObject);
            } else {
                const deleted = {};
                deleted[value] = value;
                const StringObject = JSON.stringify(deleted);
                await AsyncStorage.setItem(key, StringObject);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    async GetData(key) {
        try {
            const value = await AsyncStorage.getItem(key);
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
            keys = await AsyncStorage.getAllKeys();
        } catch (e) {

        }
        if (keys.length !== 0) {
            return keys;
        }
    }

    async RemoveValue(key) {
        try {
            this.state.history = [];
            this.setState({ history: this.state.history });
            await AsyncStorage.removeItem(key)
        } catch (e) {
            // remove error
        }
    }

    async Clear() {
        await AsyncStorage.clear();
    }
}