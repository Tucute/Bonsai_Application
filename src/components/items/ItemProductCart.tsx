import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import useCartStore from '../../store/useCartStore';
interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  promotion_price: number;
}
interface Item {
  item: Product;
}
const ItemProductCart = ({item}: Item) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updatePlusQuantity = useCartStore((state) => state.updatePlusQuantity);
  const updateMinusQuantity = useCartStore((state) => state.updateMinusQuantity);

  const handleUpdatePlusQuantity = () => {
    updatePlusQuantity(item.id);
  };
  const handleUpdateMinusQuantity = () => {
    updateMinusQuantity(item.id);
  };
  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <View style={styles.item}>
      <Image
        style={styles.imageProduct}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.middleSection}>
        <View>
          <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
          <Text style={styles.subname}>Monstera family</Text>
        </View>
        <View style={styles.updateQuantity}>
          <TouchableOpacity style={styles.plus} onPress={handleUpdatePlusQuantity}>
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity style={styles.plus} onPress={handleUpdateMinusQuantity}>
            <Text style={styles.icon}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lastSection}>
        <Text style={styles.price}>$ {item.price * item.quantity}</Text>
        <TouchableOpacity onPress={handleRemove}>
          <Image
            style={styles.iconRemove}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3405/3405244.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    borderRadius: 15,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DCE8D6',
    // width: 349,
    height: 103,
  },
  imageProduct: {
    borderRadius: 15,
    width: 100,
    height: 100,
    objectFit: 'cover',
  },
  middleSection: {
    justifyContent: 'space-around',
    height: '100%',
    width: 150,
    paddingHorizontal: 10,
  },
  name: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  subname: {
    color: '#002140',
    fontWeight: '400',
    fontSize: 12,
  },
  updateQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  plus: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    alignItems: 'center',
  },
  icon: {
    color: '#000',
    fontWeight: 'bold',
  },
  lastSection: {
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  iconRemove: {
    width: 20,
    height: 20,
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
});
export default ItemProductCart;
