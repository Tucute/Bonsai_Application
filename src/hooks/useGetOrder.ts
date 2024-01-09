import {useQuery} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function useUser() { 
  const {data, isFetching} = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
        const response = await axios.get(
          `https://2cf2-14-176-231-248.ngrok-free.app/api/get-order`,
        )}
  });
  return {
    data,
  };
}
