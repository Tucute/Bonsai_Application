import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,Alert
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import useFetchInfoTrees from '../../hooks/useFetchInfoTrees';
import  useAddToWishlist from '../../hooks/useAddWishlist';
import {useNavigation} from '@react-navigation/native';

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
interface getProfile {
  id:number
  email: string;
  name: string;
  avatar: string;
  phone: string;
}
interface WishlistItem {
  id: number; 
  item_id:number;
}
const ItemProductPopular = () => {
  const navigation = useNavigation();
  const { data: carouselData, isLoading, isError } = useFetchInfoTrees();
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const addToWishlist = async (userId: number, product: CarouselItem) => {
    useAddToWishlist(userId, product, wishlist, setWishlist);
  };
  const [userData, setUserData] = useState<getProfile>();
  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      const value = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserData(value);
    } catch (e) {
      console.log('Error: ', e);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(
          `https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist?userId=${userData?.id}`,
        );
        if (response.data.length > 0) {
          const userWishlist = response.data;
          setWishlist(userWishlist);
        }
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };
    fetchWishlist();
  }, []);
  return (
    <FlatList
      data={carouselData}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.popularTree}
          onPress={() => navigation.navigate('DetailProduct', {product: item})}>
          <ImageBackground
            source={
             {uri:item.image}
            }
            style={styles.popularImg}>
            <TouchableOpacity
              style={styles.tym}
              onPress={() => addToWishlist(userData?.id, item as CarouselItem)}>
                
              <Image
                source={require('../../assets/img_recommendations/tym.png')}
                style={[styles.imgtym , wishlist.some((wishlistItem: WishlistItem) => wishlistItem.item_id === item.id)
                  ? styles.imgtymActive
                  : null,]}
              />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.infotree}>
<View>
              <Text style={styles.nametree}>{item.name}</Text>
              <Text style={styles.slogan}>Monstera family</Text>
            </View>
            <Text style={styles.prices}>
              {item.promotion_price === item.price
                ? `$${item.price}`
                : `$${item.promotion_price}`}
              {item.promotion_price !== item.price && (
                <Text style={styles.originalPrice}>${item.price}</Text>
              )}
            </Text>
          </View>
          <View style={styles.plus}>
            <View style={styles.imgPlus}>
              <Image
                source={require('../../assets/img_popular/plus.png')}
                style={styles.plusImg}></Image>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
export default ItemProductPopular;
const styles = StyleSheet.create({
  imgtymActive: {
    tintColor: 'green', 
  },
  popularTree: {
    width: '100%',
    height: 100,
    backgroundColor: '#DCE8D6',
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  popularImg: {
    width: 100,
    height: 'auto',
    borderRadius: 10,
  },
  nametree: {
    fontSize: 14,
    color: '#002140',
    fontWeight: 'bold',
    width: 120,
    flexDirection: 'row',
  },
  slogan: {
    color: '#002140',
    fontSize: 12,
  },
  prices: {
    color: '#002140',
    fontSize: 12,
  },
  infotree: {
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  imgPlus: {
    backgroundColor: '#C3DCB7',
    width: 50,
    height: 50,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusImg: {
    width: 20,
    height: 20,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  tym: {
    width: 24,
    height: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '70%',
    marginTop: '70%',
  },
  imgtym: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});