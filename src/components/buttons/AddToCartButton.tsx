import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { TouchableOpacity, View, Text, Image, Alert, StyleSheet } from 'react-native';
import useCartStore from '../../store/useCartStore';

interface Item {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
    promotion_price:number;
}
interface typeItem {
    item: Item;
}

const AddToCartButton = ({item}: typeItem) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const updatePlusQuantity = useCartStore((state) => state.updatePlusQuantity);
    const cartItems = useCartStore((state) => state.cartItems);

    const handleAddToCart = () => {
      const found = cartItems.find(itemCart => itemCart.id === item.id);
      if (found) {
        updatePlusQuantity(item.id);
        Alert.alert('Success', 'This item already exist in your cart! Quantity has been updated')
      }
      else{
        let data = {
          ...item,
          quantity: 1
        }
        addToCart(data);
        Alert.alert('Success', 'Add to cart successfully!')
      }
      };

    return (
        <TouchableOpacity
            onPress={handleAddToCart}
            style={styles.container}>
            <View
              style={styles.viewButton}>
              <View
                style={styles.viewFirst}>
                <Image source={require('../../assets/img_detail/cart.png')} />
                <Text
                  style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
                  Add to Cart
                </Text>
              </View>
              <View>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                  {`$ ${item.price}`}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    height: 48,
    backgroundColor: '#0D986A',
    borderRadius: 50,
    justifyContent:"center",
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewFirst: {
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row',
    width:100
  },
})
export default AddToCartButton;