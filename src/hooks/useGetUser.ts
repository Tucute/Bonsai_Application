import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_USERS = 'https://63a571e42a73744b008e23ee.mockapi.io/users';

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

  const { data: profileData } = useQuery<UsersType[]>({
    queryKey: ['getProfile'],
    queryFn: async () => {
      const res = await axios.get(API_USERS);
      return res.data;
    },
    select: (data) => {
      const user = data.find((user) => user.id === userID);
      return user ? [user] : [];
    },
  });

  return { getUser, profileData };
}
