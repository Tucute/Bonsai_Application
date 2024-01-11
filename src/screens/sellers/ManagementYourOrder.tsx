import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import ItemProductCheckout from '../../components/items/ItemProductCheckout';
import useUser from '../../hooks/useUser';
interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  promotion_price: number;
}
export default function ManagementYourOrder({navigation}: any) {
  const {data} = useUser();
  let dataItem: Product = {
    id: 2,
    name: 'Bonsai tam đa cổ thụ',
    description: 'Ngon bỏ rẻ',
    quantity: 2,
    price: 5000,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Trident_Maple_bonsai_52%2C_October_10%2C_2008.jpg/800px-Trident_Maple_bonsai_52%2C_October_10%2C_2008.jpg',
    promotion_price: 4300,
  };
  const [userData, setUserData] = useState<Product>(data);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentOrder}>
        <Text style={styles.textOrder}>Đã đặt hàng</Text>
        <Text style={styles.textOrder}>
          Đơn hàng{'\n'} đang chờ{'\n'} vận chuyển
        </Text>
        <Text style={styles.textOrder}>Đang vận{'\n'} chuyển </Text>
        <Text style={styles.textOrder}>Đã giao</Text>
      </View>
      <View style={styles.contentFrofile}>
        <Text style={styles.textFrofile}>
        <Image
              style={styles.imgViewMessage}
              source={{
                uri:'https://o.remove.bg/uploads/71ea3135-7480-432a-bb1c-c586eadbdee4/png-transparent-gps-navigation-systems-computer-icons-global-positioning-system-gps-location-location-gps-navigation-systems-black-and-white.png',
              }}
            />
           {data?.name} (+84){data?.phone}
        </Text>
        <Text style={styles.textFrofile}>{data?.address}</Text>
      </View>
      <View style={styles.contentItem}>
        <ItemProductCheckout item={dataItem} />
      </View>
      <View style={styles.contenContact}>
        <View>
          <TouchableOpacity style={styles.contact}>
            <Text style={styles.textcontact}>Liên hệ với người bán </Text>
            <Image
              style={styles.imgViewMessage}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/6399/6399624.png',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>
            Về sản phẩm, vận chuyển, trả hàng & hoàn tiền.
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.contact} onPress={()=>navigation.navigate('Chat')}>
            <Text style={styles.textcontact}>Liên hệ với Bonsai </Text>
            <Image
              style={styles.imgViewMessage}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/6399/6399624.png',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>
            Về tài khoản, thanh toán, khiếu với người bán và các vấn để khác
          </Text>
        </View>
      </View>
      <View style={styles.contenContact}>
        <TouchableOpacity>
          <Text style={styles.textcontact}>Chi tiết đơn hàng </Text>
        </TouchableOpacity>
        <View style={styles.contentDetail}>
          <Text style={styles.textDetail}>Ngày đặt hàng </Text>
          <Text style={styles.textDetail}>Jan 8, 2024 </Text>
        </View>
        <View style={styles.contentDetail}>
          <Text style={styles.textDetail}>Phương thức thanh toán </Text>
          <Text style={styles.textDetail}>Cash on delivery </Text>
        </View>
      </View>
      <View style={styles.contenOverview}>
        <Text style={styles.textoverview}>Tổng quan đơn hàng</Text>
        <View style={styles.totalOrder}>
          <Text style={styles.texttotalOrder}>Tổng phụ</Text>
          <Text style={styles.texttotalOrder}>$50000</Text>
        </View>
        <View style={styles.buttomText}>
          <TouchableOpacity>
            <Text style={styles.bottomtextItem}>Thay đổi địa chỉ</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.bottomtextItem}>Huỷ đơn hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentOrder: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  textOrder: {
    color: 'black',
  },
  contentFrofile: {
    backgroundColor: '#fff',
    marginTop: 8,
  },
  contentItem: {
    backgroundColor: '#fff',
    marginTop: 8,
  },
  textFrofile: {
    color: 'black',
    paddingHorizontal: 12,
    padding: 5,
  },
  contenContact: {
    backgroundColor: '#fff',
    marginTop: 8,
    paddingHorizontal: 12,
    padding: 18,
    marginVertical: 12,
    gap: 18,
  },
  imgViewMessage: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  textcontact: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  text: {
    color: 'black',
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  textoverview: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  totalOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#9E9E9E',
  },
  texttotalOrder: {
    color: 'black',
    fontSize: 16,
  },
  buttomText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomtextItem: {
    color: 'black',
    borderWidth: 1,
    marginHorizontal: 12,
    marginVertical: 12,
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  contentDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDetail: {
    color: '#000',
  },
  contenOverview:{
    backgroundColor: '#fff',
    marginTop: 8,
    paddingHorizontal: 12,
    padding: 18,
    marginVertical: 12,
    gap: 18,
  }
});
