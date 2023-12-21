import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Bag</Text>
      <View style={styles.sectionItem}>
        <View style={styles.item}>
          <Image
            style={styles.imageProduct}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsKgkKoRe3tc_HKjRlEpdP1bjDueprBn6GdxDHuGbwP2HFQIDucLM7BwqeNZ9754zvMc&usqp=CAU',
            }}
          />
          <View style={styles.middleSection}>
            <View>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.subname}>SubName</Text>
            </View>
            <View style={styles.updateQuantity}>
              <TouchableOpacity style={styles.plus}>
                <Text>+</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>2</Text>
              <TouchableOpacity style={styles.plus}>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lastSection}>
            <Text style={styles.price}>2000000 VND</Text>
            <Image
              style={styles.iconRemove}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3405/3405244.png',
              }}
            />
          </View>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.imageProduct}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsKgkKoRe3tc_HKjRlEpdP1bjDueprBn6GdxDHuGbwP2HFQIDucLM7BwqeNZ9754zvMc&usqp=CAU',
            }}
          />
          <View style={styles.middleSection}>
            <View>
              <Text style={styles.name}>Name</Text>
              <Text style={styles.subname}>SubName</Text>
            </View>
            <View style={styles.updateQuantity}>
              <TouchableOpacity style={styles.plus}>
                <Text>+</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>2</Text>
              <TouchableOpacity style={styles.plus}>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lastSection}>
            <Text style={styles.price}>2000000 VND</Text>
            <Image
              style={styles.iconRemove}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3405/3405244.png',
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.applyCoupon}>
        <Text>fdfds</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  sectionItem: {
    paddingVertical: 10,
  },
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
  },
  name: {
    color: '#002140',
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
    justifyContent: 'space-between',
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
  lastSection: {
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  iconRemove: {
    width: 20,
    height: 20,
    // fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  applyCoupon: {
    flexDirection: 'row',
  },
});
export default CartScreen;
