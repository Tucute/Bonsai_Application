import {useQuery} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { url } from '../components/url/urlNgrok';
export default function useUser() { 
  const {data, isFetching} = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
        const response = await axios.get(
          `${url}/api/get-order`,
        )}
  });
  return {
    data,
  };
}
