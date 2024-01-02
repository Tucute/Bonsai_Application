import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
interface Account {
  email: string;
  password: string;
}
const useLogin = ({navigation}: any) => {
  const mutation = useMutation({
    mutationFn: async (data: Account) => {
      axios
        .post(
          'https://ec71-14-176-231-248.ngrok-free.app/api/login',
          data,
        )
        .then(async res => {
          if (res.status === 200) {
            const token = res.data.token;
            await AsyncStorage.setItem('token', token);
            Alert.alert('Success', 'Login successfully', [
              {text: 'OK', onPress: () => navigation.navigate('Root')},
            ]);
          } else {
            Alert.alert('Email or password is invalid');
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
  });
  const handleLogin = (data: Account) => {
    mutation.mutate(data);
  };
  return {handleLogin};
};

export default useLogin;
