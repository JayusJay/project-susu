import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStorage = () => {
    const registrationStore = async (user) => {
        try {
            return await AsyncStorage.setItem('@SuSu:user', JSON.stringify(user));
        } catch (e) {
            console.log(e);
        }
    }
    const registrationRetrieve = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@SuSu:user');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            // error reading value
            console.log(e)
        }
    }
    const registrationRemove = async () => {
        try {
            return await AsyncStorage.removeItem('@SuSu:user');
        } catch(e) {
            // error reading value
            console.log(e)
        }
    }
    const loginStore = async (user) => {
        try {
            return await AsyncStorage.setItem('@SuSu:user1', JSON.stringify(user));
        } catch (e) {
            console.log(e);
        }
    }
    const loginRetrieve = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@SuSu:user1');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            // error reading value
            console.log(e)
        }
    }
    const loginRemove = async () => {
        try {
            return await AsyncStorage.removeItem('@SuSu:user1');
        } catch(e) {
            // error reading value
            console.log(e)
        }
    }
    const resetStore = async (user) => {
        try {
            return await AsyncStorage.setItem('@SuSu:user2', JSON.stringify(user));
        } catch (e) {
            console.log(e);
        }
    }
    const resetRetrieve = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@SuSu:user2');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            // error reading value
            console.log(e)
        }
    }
    const resetRemove = async () => {
        try {
            return await AsyncStorage.removeItem('@SuSu:user2');
        } catch(e) {
            // error reading value
            console.log(e)
        }
    }
    return {
        registrationStore, registrationRetrieve, registrationRemove, 
        loginStore, loginRetrieve, loginRemove, resetStore, resetRetrieve, resetRemove
    }
}
export default asyncStorage;