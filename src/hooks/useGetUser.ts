import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { url } from '../components/url/urlNgrok';

const API_USERS = `${url}/api/get-users`;

interface UsersType {
  id: number;
  name: string;
  avatar: string;
  address: string;
}

export default function useGetUser() {
  const getUser = async () => {
    try {
      const res = await AsyncStorage.getItem('user');
      const user = res ? JSON.parse(res) : null;
      const userID = user ? user.userid : null;
      return userID;
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  };

  const { data: userID } = useQuery<number>({
    queryKey: ['getUser'],
    queryFn: getUser,
  });

  const { data: profileData } = useQuery<UsersType>({
    queryKey: ['getProfile', userID],
    queryFn: async () => {
      const response = await axios.get(`${API_USERS}/${userID}`);
      return response.data;
    },
  });

  return { getUser, profileData };
}
