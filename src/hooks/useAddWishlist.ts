import axios from 'axios';
import { Alert } from 'react-native';
interface CarouselItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  promotion_price: string;
  category_id: number | null;
  supplier_id: number | null;
  created_at: Date | null;
  updated_at: Date | null;
}
interface WishlistItem {
  id: number;
  item_id:number;
}
type SetWishlistFunction = React.Dispatch<React.SetStateAction<WishlistItem[]>>;
const useAddToWishlist = async (
  userId: number ,
  product: CarouselItem,
  wishlist: WishlistItem[],
  setWishlist: SetWishlistFunction
) => {
  try {
    if (!userId) {
      console.error('User ID not found');
      return;
    }
    const isProductInWishlist = wishlist.some(
      (wishlistItem: WishlistItem) => wishlistItem.item_id === product.id
    );

    if (isProductInWishlist) {
      Alert.alert(
        'Warning',
        'The product is already in your favorites list!'
      );
    } else {
      const newItem = {
        user_id: Number(userId),
        item_id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        promotion_price: product.promotion_price,
        category_id: product.category_id,
        supplier_id: product.supplier_id,
        created_at: product.created_at,
        updated_at: product.updated_at,
        id: wishlist.length + 1,
      };

      const response = await axios.post(
        'https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist',
        newItem
      );

      setWishlist((prevWishlist) => {
        const newWishlist = [response.data, ...prevWishlist];
        return newWishlist;
      });

      Alert.alert(
        'Success',
        'The product has been successfully added to your favorites list!'
      );
    }
  } catch (error) {
    console.error('Error updating wishlist:', error);
  }
};

export default useAddToWishlist;
