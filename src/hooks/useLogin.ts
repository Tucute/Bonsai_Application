import {useMutation} from '@tanstack/react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import { url } from '../components/url/urlNgrok';
interface Account {
  email: string;
  password: string;
}
const useLogin = ({navigation}: any) => {
  const mutation = useMutation({
    mutationFn: async (data: Account) => {
      axios
        .post(
          `${url}/api/login`,
          // 'https://645e542e8d08100293fcd90e.mockapi.io/webxedap',
          data,
        )
        .then(async res => {
          if (res.status === 200) {
            console.log(res.data);
            const token = res.data.token;
            const userid = res.data.user.id;
            // const userid = res.data.id;
            const user = JSON.stringify({token, userid});
            await AsyncStorage.setItem('user', user);
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