import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface WishlistItem {
  id: number;
  item_id: number;
}

const useCheckWishlist = (userId: number | undefined) => {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  
    const fetchAndSetWishlist = async () => {
        try {
          if (userId) {
            const response = await axios.get(
              `https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist?userId=${userId}`,
            );
            if (response.data.length > 0) {
              const userWishlist = response.data;
              AsyncStorage.setItem('wishlist', JSON.stringify(userWishlist));
              console.log('Setting wishlist:', userWishlist);
              setWishlist(userWishlist);
              console.log('Wishlist fetched and set successfully.',userWishlist);
            }
          }
        } catch (error) {
          console.error('Error fetching and setting wishlist:', error);
        }
      };
  
    useEffect(() => {
      const getStoredWishlist = async () => {
        try {
          const storedWishlist = await AsyncStorage.getItem('wishlist');
          if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
            console.log('Wishlist fetched from storage:', JSON.parse(storedWishlist));
          }
        } catch (error) {
          console.error('Error getting stored wishlist:', error);
        }
      };
  
      fetchAndSetWishlist();
      getStoredWishlist();
    }, [userId]);
  
    return { wishlist, setWishlist, fetchAndSetWishlist };
  };
  
  export default useCheckWishlist;
  
