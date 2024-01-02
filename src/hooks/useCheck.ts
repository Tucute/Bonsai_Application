import AsyncStorage from '@react-native-async-storage/async-storage';
export default function useCheck({navigation}: any) {
  const check = async () => {
    const getToken = await AsyncStorage.getItem('token');
    console.log('Token after removal:', getToken);
    if (getToken === null) {
      console.log('Navigating to SignUp');
      navigation.navigate('SignUp');
    }
  };
  return {check};
}
