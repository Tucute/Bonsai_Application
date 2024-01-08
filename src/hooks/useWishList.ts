import axios from 'axios';
import {useEffect, useState} from 'react';

export default function useWishList() {
  const [dataWishList, setDataWishList] = useState([]);

  const fetchWishList = async () => {
    try {
      const response = await axios.get(
        'https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist',
      );

      const userAddWishList = response.data.find(item => item.user_id === 20);

      if (userAddWishList) {
        setDataWishList(userAddWishList.itemWishList || []);
      } else {
        setDataWishList([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeItemFromWishList = async ({ itemId }: { itemId: number }) => {
    console.log(itemId);
    try {
      const userId = 20;
      const response = await axios.delete(
        `https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist/${userId}/itemWishList/${itemId}`
      );
      if (response.status === 200) {
        await fetchWishList();
      } else {
        console.error('Error removing item from wish list. Status:', response.status);
      }
    } catch (error) {
      console.error('Error removing item from wish list:', error);
    }
  };
  useEffect(() => {
    fetchWishList();
  }, []);
  return {dataWishList, removeItemFromWishList};
}
