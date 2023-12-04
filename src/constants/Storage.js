import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {
  set: async (key, value) => {
    try {
      return await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('AsyncStorage#setItem error:', e.message);
    }
  },
  get: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      console.error('Error reading value:', e.message);
    }
  },
  remove: async (key) => {
    return await AsyncStorage.removeItem(key);
  },
};

export default Storage;
