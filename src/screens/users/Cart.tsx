import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import ItemProductCart from '../../components/items/ItemProductCart';
import useCartStore from '../../store/useCartStore';
import {styles} from '../../styles/StyleCart';
import useVoucher from '../../hooks/useVoucher';

const CartScreen = ({navigation}: any) => {

  const cartItems = useCartStore(state => state.cartItems);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState<number | undefined>();
  const voucher = useVoucher();

  const handleApplyCode = () => {
    const code = voucher?.find(item => {
      return item.code === voucherCode;
    });
    setDiscount(code?.discount);
  };
  useEffect(() => {
    const handleTotalPrice = () => {
      const price = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      if (price > 50) {
        discount
          ? setTotalPrice(price - (price * discount) / 100)
          : setTotalPrice(price);
      } else {
        discount
          ? setTotalPrice(price - (price * discount) / 100)
          : setTotalPrice(price);
      }
    };
    handleTotalPrice();
  }, [cartItems, discount]);

  const handleNavigate = () => {
    if (cartItems.length) {
      navigation.navigate('checkout', {cartItems, totalPrice, discount});
    }
  };

  const viewEmpty = () => {
    return (
      <View style={styles.viewCartEmpty}>
        <Text style={styles.textCartEmpty}>Your Shopping Cart is empty.</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewListItem}>
        <FlatList
          style={styles.sectionItem}
          data={cartItems}
          keyExtractor={index => index.id.toString()}
          renderItem={({item}) => <ItemProductCart item={item} />}
          ListEmptyComponent={viewEmpty}
          ListHeaderComponent={<Text style={styles.title}>Shopping Bag</Text>}
        />
      </View>
      <View style={styles.applyCouponSection}>
        <View style={styles.applyCoupon}>
          <View style={styles.viewIcon}>
            <Image
              style={styles.imgIcon}
              source={require('../../assets/img_cart/ApplyCoupon.png')}
            />
          </View>
          <View style={styles.lastSC}>
            <Text style={styles.titleCoupon}>Apply Coupon</Text>
            <TextInput
              style={styles.textCoupon}
              placeholder="coupon code"
              value={voucherCode}
              onChangeText={text => setVoucherCode(text)}
            />
            <TouchableOpacity style={styles.btnApply} onPress={handleApplyCode}>
              <Text style={styles.textApply}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.applyDelivery}>
          <View style={styles.viewIcon}>
            <Image
              style={styles.imgIcon}
              source={require('../../assets/img_cart/Delivery.png')}
            />
          </View>
          <View style={styles.lastSC}>
            <View style={styles.viewTextCoupon}>
              <Text style={styles.titleCoupon}>Delivery</Text>
              <Text style={styles.textColor}>Order above $50 to get </Text>
              <Text style={styles.textColor}>
                Free Delivery
                <Text style={styles.subTextDelivery}> Shop for more $20 </Text>
              </Text>
            </View>
            <Text style={styles.priceCoupon}>$ 15</Text>
          </View>
        </View>
      </View>
      <View style={styles.viewCheckout}>
        <View style={styles.viewSumarize}>
          <Text style={styles.textSumarize}>Total of product: </Text>
          <Text style={styles.textSumarizeRight}>{cartItems.length}</Text>
        </View>
        <View style={styles.viewSumarize}>
          <Text style={styles.textSumarize}>Ship: </Text>
          {totalPrice > 50 ? (
            <Text style={styles.textSumarizeRight}>Free shipping</Text>
          ) : (
            <Text style={styles.textSumarizeRight}>{cartItems.length>0? 'FreeSip': 0}</Text>
          )}
        </View>
        {discount ? (
          <View style={styles.viewSumarize}>
            <Text style={styles.textSumarize}>Coupon: </Text>
            <Text style={styles.textSumarizeRight}>-{discount}%</Text>
          </View>
        ) : (
          <View></View>
        )}

        <TouchableOpacity style={styles.btnCheckout} onPress={handleNavigate}>
          <View style={styles.viewbtnCheckout}>
            <Image
              style={styles.imgCheckout}
              source={require('../../assets/img_cart/IconCheckout.png')}
            />
            <Text style={styles.titleCheckout}>Checkout</Text>
          </View>
          <Text style={styles.priceCheckout}>$ {totalPrice}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
