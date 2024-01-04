import axios from 'axios';
import { Alert } from 'react-native';
import {useEffect, useState} from 'react';
interface CarouselItem {
  id: number;
  message: string;
}
export default function useWishList() {
  const [dataWishList, setDataWishList] = useState<CarouselItem[]>([]);

  const fetchWishList = async () => {
    try {
      const response = await axios.get(
        'https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist?user_id=20',
      );
       
      setDataWishList(response.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const removeItemFromWishList = async ({itemId}: {itemId: number}) => {
    try {
      const response = await axios.delete(
        `https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist/${itemId}`,
      );

      if (response.status === 200) {
        Alert.alert('Item removed successfully');

        setDataWishList(prevData =>
          prevData.filter(item => item.id !== itemId),
        );
      } else {
        console.error(
          'Error removing item from wish list. Status:',
          response.status,
        );
      }
    } catch (error:any) {
      if (error.response) {
        console.error(
          'Server responded with an error status:',
          error.response.status,
        );
        console.error('Error data:', error.response.data);
      } else if (error.request) {
        console.error('No response received from the server');
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  useEffect(() => {
    fetchWishList();
  }, []);
  return {dataWishList, removeItemFromWishList};
}
