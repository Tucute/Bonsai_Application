import {useQuery} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { url } from '../components/url/urlNgrok';
export default function useUser() { 
  const {data, isFetching} = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        const value = jsonValue != null ? JSON.parse(jsonValue) : null;
        const userid = value.userid;
        const response = await axios.get(
          `${url}/api/get-users/${userid}`,
        );
        return response.data;
      } catch (error) {
        console.log('Error fetching user data: ', error);
        throw error;
      }
    },
  });
  return {
    data,
  };
}
