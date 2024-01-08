import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useMutation} from '@tanstack/react-query';
import {Alert} from 'react-native';
interface InfoSignUp {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string | undefined;
  age?: number | undefined;
  phone?: string | undefined;
  address?: string | undefined;
}
const useSigup = ({navigation}: any) => {
  const [signUpInfo, setSignUpInfo] = useState<InfoSignUp>();
  useEffect(() => {
    const getInfoSignUp = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('signUpInfo');
        if (jsonValue !== null) {
          setSignUpInfo(JSON.parse(jsonValue));
        }
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        console.log(e);
      }
    };
    getInfoSignUp();
  }, []);
  const mutation = useMutation({
    mutationFn: async (data: InfoSignUp) => {
      axios
        .post('https://da08-14-176-231-248.ngrok-free.app/api/register', data)
        .then(res => {
          if (res.status === 200) {
            const jsonValue = JSON.stringify(res.data.user);
            Alert.alert('Success', 'Register successfully', [
              {text: 'OK', onPress: () => navigation.navigate('Login')},
            ]);
          } else {
            Alert.alert('Invalid information!');
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
  });
  const handleSignUp = (data: InfoSignUp) => {
    if (data && data.confirmPassword === data.password) {
      console.log('dataaaaa---=====-------', data);
      mutation.mutate(data);
    } else {
      Alert.alert('Error', 'Fillout complete information !');
    }
  };
  return {
    handleSignUp,
    signUpInfo,
  };
};
export default useSigup;
