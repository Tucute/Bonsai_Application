import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';

const ItemProductCart = () => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.imageProduct}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsKgkKoRe3tc_HKjRlEpdP1bjDueprBn6GdxDHuGbwP2HFQIDucLM7BwqeNZ9754zvMc&usqp=CAU',
        }}
      />
      <View style={styles.middleSection}>
        <View>
          <Text style={styles.name}>Monstera Adansonii</Text>
          <Text style={styles.subname}>Monstera family</Text>
        </View>
        <View style={styles.updateQuantity}>
          <TouchableOpacity style={styles.plus}>
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>2</Text>
          <TouchableOpacity style={styles.plus}>
            <Text style={styles.icon}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lastSection}>
        <Text style={styles.price}>$ 3000</Text>
        <Image
          style={styles.iconRemove}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3405/3405244.png',
          }}
        />
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
    width: 349,
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
    marginLeft: -20,
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
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
});
export default ItemProductCart;
