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
          'https://rise.api-uat.kindicare.com/api/v1/client/auth/login',
          data,
        )
        .then(async res => {
          console.log(res.data.token);
          if (res.status === 200) {
            const token = res.data.token;
            await AsyncStorage.setItem('token', token);
            // const jsonValue = JSON.stringify(res.data.user);
            // AsyncStorage.setItem('account', jsonValue);
            Alert.alert('Success', 'Login successfully', [
              {text: 'OK', onPress: () => navigation.navigate('HomePage')},
            ]);
          } else {
            Alert.alert('Email hoặc mật khẩu không đúng');
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
