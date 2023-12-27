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
        .post('http://127.0.0.1:8000/api/register', data)
        .then(res => {
          if (
            res.data.status === 200 &&
            data.confirmPassword === data.password
          ) {
            const jsonValue = JSON.stringify(res.data.user);
            console.log(jsonValue);
            Alert.alert('Success', 'Login successfully', [
              {text: 'OK', onPress: () => navigation.navigate('Login')},
            ]);
          } else {
            Alert.alert('Invalid information!');
          }
          console.log(res.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  });
  const handleSignUp = (data: InfoSignUp) => {
    if (data && data.confirmPassword === data.password) {
      console.log(data);
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
