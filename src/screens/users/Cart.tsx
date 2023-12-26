import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ItemProductCart from '../../components/items/ItemProductCart';
const CartScreen = ({navigation}: any) => {
  const [quantity, setQuantity] = useState(1);
  const plusQuantity = () => setQuantity(prev => prev + 1);
  const minusQuantity = () => setQuantity(prev => prev - 1);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Bag</Text>
      <View style={styles.sectionItem}>
        <ItemProductCart />
        <ItemProductCart />
      </View>
      <View style={styles.applyCouponSection}>
        <View style={styles.applyCoupon}>
          <View style={styles.viewIcon}>
            <Image
              style={styles.imgIcon}
              source={require('../../assets/img_cart/ApplyCoupon.png')}
            />
          </View>
          <Text style={styles.titleCoupon}>Apply Coupon</Text>
          <Text style={styles.textCoupon}>coupon code</Text>
        </View>
        <View style={styles.applyDelivery}>
          <View style={styles.viewIcon}>
            <Image
              style={styles.imgIcon}
              source={require('../../assets/img_cart/Delivery.png')}
            />
          </View>
          <View style={styles.viewTextCoupon}>
            <Text style={styles.titleCoupon}>Delivery</Text>
            <Text>Order above $50 to get </Text>
            <Text>
              Free Delivery
              <Text style={styles.subTextDelivery}> Shop for more $20 </Text>
            </Text>
          </View>
          <Text style={styles.priceCoupon}>$ 15</Text>
        </View>
      </View>
      <View style={styles.lastSection}>
        <View style={styles.viewItem}>
          <View style={styles.viewTitle}>
            <Text style={styles.textViewTitle}>Saved for later</Text>
            <Text style={styles.textViewTitle}>3 items</Text>
          </View>
          <View style={styles.viewItemInfo}>
            <Image
              style={styles.imgItemInfo}
              source={{
                uri: 'https://i.pinimg.com/originals/f3/b5/a3/f3b5a307b7a7080f7bbcde7ec3a5fbb5.jpg',
              }}
            />
            <View style={styles.viewMiddleSection}>
              <Text style={styles.titleItem}>Large Snake Zylanica</Text>
              <View style={styles.updateQuantity}>
                <TouchableOpacity style={styles.plus} onPress={plusQuantity}>
                  <Text style={styles.icon}>+</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity style={styles.plus} onPress={minusQuantity}>
                  <Text style={styles.icon}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.viewLastSection}>
              <Text style={styles.titleItem}>$ 60</Text>
              <Text>Move to cart</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewCheckout}>
        <TouchableOpacity
          style={styles.btnCheckout}
          onPress={() => navigation.navigate('checkout')}>
          <View style={styles.viewbtnCheckout}>
            <Image
              style={styles.imgCheckout}
              source={require('../../assets/img_cart/IconCheckout.png')}
            />
            <Text style={styles.titleCheckout}>Checkout</Text>
          </View>
          <Text style={styles.priceCheckout}>$ 60</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  sectionItem: {
    flex: 3,
    marginTop: 10,
    marginBottom: 10,
  },
  applyCouponSection: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  applyCoupon: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewIcon: {
    backgroundColor: '#DCE8D6',
    padding: 10,
    borderRadius: 100,
  },
  imgIcon: {
    width: 40,
    height: 40,
  },
  titleCoupon: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    width: 160,
  },
  textCoupon: {
    color: '#6A6A6A8F',
    borderBottomWidth: 1,
  },
  applyDelivery: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  viewTextCoupon: {
    flexDirection: 'column',
  },
  subTextDelivery: {
    color: 'red',
    fontWeight: 'bold',
  },
  priceCoupon: {
    top: -18,
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastSection: {
    flex: 2,
  },
  viewItem: {
    backgroundColor: '#FFEDCA',
    marginVertical: 20,
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  viewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  textViewTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0D986A',
  },
  viewItemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgItemInfo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    objectFit: 'cover',
  },
  viewMiddleSection: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 50,
    marginLeft: -10,
  },
  titleItem: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
  },
  viewLastSection: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
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
  viewCheckout: {
    flex: 1.7,
  },
  btnCheckout: {
    backgroundColor: '#0D986A',
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  viewbtnCheckout: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgCheckout: {
    width: 30,
    height: 30,
  },
  titleCheckout: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 20,
  },
  priceCheckout: {
    fontSize: 20,
    color: '#fff',
    marginRight: 10,
  },
});
export default CartScreen;
