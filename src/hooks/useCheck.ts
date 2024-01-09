import AsyncStorage from '@react-native-async-storage/async-storage';
export default function useCheck({navigation}: any) {
  const check = async () => {
    const getToken = await AsyncStorage.getItem('token');
    if (getToken === null) {
      navigation.navigate('SignUp');
    }
  };
  return {check};
}
