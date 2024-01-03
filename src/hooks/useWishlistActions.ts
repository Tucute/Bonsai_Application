import { StyleSheet, Text, View, Alert} from 'react-native'
import React,{ useState, useEffect } from 'react'
import axios from 'axios';
interface CarouselItem {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    promotion_price: string;
  }
const useWishlistActions = () => {
    const [wishlist, setWishlist] = useState([]);
   
    const addToWishlist = async (userId: number, product: CarouselItem, {navigation}:any) => {
        try {
          const wishlistResponse = await axios.get(
            `https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist?user_id=${userId}`,
          );
    
          if (wishlistResponse.data.length > 0) {
            const wishlist = wishlistResponse.data[0];
    
            const isProductInWishlist = wishlist.itemWishList.some(
              (item:CarouselItem) => item.id === product.id,
            );
           
            if (!isProductInWishlist) {
              wishlist.itemWishList.push(product);
    
              await axios.put(
                `https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist/${wishlist.id}`,
                wishlist,
              );
    
              Alert.alert(
                'Success',
                'The product has been successfully added to your favorites list!',
                [
                  {
                    text: 'OK',
                    onPress: () => navigation.navigate('WishList'),
                  },
                ],
              );
            } else {
              Alert.alert(
                'Warning',
                'The product is already in your favorites list!',
                [
                  {
                    text: 'OK',
                    onPress: () => navigation.navigate('WishList'),
                  },
                ],
              );
            }
          } else {
            const newWishlist = await axios.post(
              'https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist',
              {
                user_id: userId,
                itemWishList: [product],
              },
            );
    
            Alert.alert('Success', 'New wishlist added.');
          }
        } catch (error) {
          console.error('Error updating wishlist:', error);
        }
      };
      useEffect(() => {
        const fetchWishlist = async () => {
          try {
            const response = await axios.get(
              `https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist?user_id=20`,
            );
           
            if (response.data.length > 0) {
              const userWishlist = response.data[0];
              setWishlist(userWishlist.itemWishList);
              
            }
          } catch (error) {
            console.error('Error fetching wishlist:', error);
          }
        };
      
        fetchWishlist();
      }, []);
      return { addToWishlist };
}

export default useWishlistActions

const styles = StyleSheet.create({})