import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
    constructor(namespace = 'auth'){
        this.namespace = namespace;
    }

    async getAccessToken() {
        const accessToken = await AsyncStorage.getItem(`${this.namespace}:token`);

        return accessToken ? JSON.parse(accessToken) : [];
    }

    async setAccessToken(accessToken) {
        try {
            await AsyncStorage.setItem(`${this.namespace}:token`, JSON.stringify(accessToken));
        } catch (error) {
            console.log(error);
        }
    }

    async removeAccessToken() {
        try {
            await AsyncStorage.removeItem(`${this.namespace}:token`);
        } catch (error) {
            console.log(error);
        }
    }
}

export default AuthStorage;