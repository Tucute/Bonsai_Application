import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {styles} from '../../styles/styleCheckout';
import {useState, useEffect} from 'react';
import ItemProductCheckout from '../../components/items/ItemProductCheckout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useUser from '../../hooks/useUser';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { url } from '../../components/url/urlNgrok';
interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  promotion_price: number;
}

interface Data {
  status: boolean;
  cartItems: Product[],
  totalPrice: number,
}
interface getProfile {
  email: string;
  name: string;
  avatar: string;
  phone: string;
  address: string;
}
const viewHeader = () => {
  const {data} = useUser()
  return (
    <View style={styles.viewAddress}>
      <Text style={styles.nameUser}>{data?.name}</Text>
      <Text style={styles.phoneUser}>(+84) {data?.phone}</Text>
      <Text style={styles.AddressUser}>
        {data?.address}
      </Text>
    </View>
  );
};

const viewFooter = (
  {navigation}: any,
  cartItems: Product[],
  totalPrice: number,
  discount: number,
) => {
  const [price, setPrice] = useState<number>(0);
  useEffect(() => {
    const handleTotalPrice = () => {
      const price = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      if (price > 50) {
        setPrice(price);
      } else {
        setPrice(price);
      }
    };
    handleTotalPrice();
  }, [cartItems, discount]);

  const addOrderMutation = useMutation({
    mutationFn: async (data: Data) => {
      try {
        const jsonValue = await AsyncStorage.getItem('user');
        const value = jsonValue != null ? JSON.parse(jsonValue) : null;
        const token = value.token;
        const response = await axios.post(
          `${url}/api/order`,
          data,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        );
        
        if (response.status === 200) {
          Alert.alert('Success', 'Checkout successfully', [
            {text: 'OK', onPress: () => navigation.navigate('Order')},
          ]);
        } else {
          Alert.alert('Invalid information!');
        }
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleCheckout = () => {
    const data: Data = {
      status: false,
      totalPrice: totalPrice,
      cartItems: cartItems,
    };
    addOrderMutation.mutate(data);
  }
  return (
    <View>
      <View style={styles.sumarizeOrder}>
        <Text style={styles.titleOrder}>Tóm tắt đơn hàng</Text>
        <View style={styles.listInfo}>
          <Text style={styles.textColor}>Tổng phụ</Text>
          <Text style={styles.textColor}>${price}</Text>
        </View>
        <View style={styles.listInfo}>
          <Text style={styles.textColor}>Vận chuyển</Text>
          <Text style={styles.textColor}>Free Shipping</Text>
        </View>
        <View style={styles.listInfo}>
          <Text style={styles.textColor}>Shipping discount</Text>
          <Text style={styles.textColor}>-{discount}%</Text>
        </View>
        <View style={styles.listInfo}>
          <Text style={styles.total}>Tổng</Text>
          <Text style={styles.total}>${totalPrice}</Text>
        </View>
      </View>
      <View style={styles.viewPayment}>
        <Text style={styles.titleOrder}>Phương thức thanh toán</Text>
        <TouchableOpacity style={styles.cash}>
          <Text style={styles.viewCOD}>COD</Text>
          <Text style={styles.textPayment}>Thanh toán khi nhận hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewVNpay}>
          <Image
            style={styles.VNpay}
            source={{
              uri: 'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png',
            }}
          />
          <Text style={styles.textVNpay}>Ví điện tử VNPAY</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewTotalOrder}>
        <View style={styles.totalOrder}>
          <Text style={styles.textTotalPrice}>Tổng (1 mặt hàng)</Text>
          <Text style={styles.textTotalPrice}>${totalPrice}</Text>
        </View>
        <Text style={styles.textSave}>Bạn đã tiết kiệm được ${price-totalPrice}</Text>
        <TouchableOpacity style={styles.btnOrder} onPress={handleCheckout}>
          <Text style={styles.textOrder}>ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Checkout = ({navigation, route}: any) => {
  const {cartItems, totalPrice, discount} = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={index => index.id.toString()}
        renderItem={({item}) => <ItemProductCheckout item={item} />}
        ListHeaderComponent={viewHeader}
        ListFooterComponent={viewFooter({navigation},cartItems, totalPrice, discount)}
      />
    </View>
  );
};

export default Checkout;
