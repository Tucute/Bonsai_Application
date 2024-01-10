import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Image} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import useUser from '../../hooks/useUser';
import { url } from '../../components/url/urlNgrok';
interface userData {
  name: string;
  phone: number;
  address: string;
}
export default function ManagementOrder({navigation}: any) {
  const {data} = useUser();
  const query = useQuery({
    queryKey: ['todo'],
    queryFn: async () => {
      const response = await axios.get(
        `${url}/api/get-products`,
      );
      return response.data;
    },
  });

  const renderItem = ({item}: any) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.droppedTree}
          onPress={() => navigation.navigate('DetailProduct', {product: item})}>
          <Image source={{uri: item.image}} style={styles.droppedImg} />
          <Text style={styles.nameTree}>{item.name}</Text>
          <Text>
            {item.promotion_price === item.price ? (
              <Text style={styles.price}>${item.price}</Text>
            ) : (
              <Text style={styles.price}>${item.promotion_price}</Text>
            )}
            {item.promotion_price !== item.price && (
              <Text style={styles.originalPrice}>${item.price}</Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <View>
        <View style={styles.contenText}>
          <Image
            source={require('../../assets/images/iconv.png')}
            style={styles.image}
          />
          <Text style={styles.textItemHeader}>Đã gửi đơn hàng </Text>
          <Text style={styles.textItem}>
            Thông tin vận chuyển của bạn:{data?.name} - (+84){data?.phone} - {data?.address}
          </Text>
          <View style={styles.buttomText}>
            <TouchableOpacity>
              <Text style={styles.bottomtextItem}>Thay đổi địa chỉ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ManagementYourOrder')}>
              <Text style={styles.bottomtextItem}>Xem đơn hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ContenSearch}>
          <Text style={styles.textSearch}>Tìm kiếm |</Text>
          <Text style={styles.textOffer}>Đề xuất</Text>
        </View>
      </View>
      <FlatList
        data={query.data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={styles.listItem}
      />
    </>
  );
}
const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    marginVertical: 10,
  },
  contenText: {
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  textItem: {
    color: 'black',
    paddingVertical: 10,
    textAlign: 'center',
  },
  textItemHeader: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
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
    borderRadius:5,
  },
  image: {
    width: 60,
    height: 60,
  },
  ContenSearch: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 6,
    width: '100%',
    height: 40,
    gap: 70,
    paddingLeft: 22,
  },
  textSearch: {
    color: 'black',
    padding: 10,
  },
  textOffer: {
    color: 'black',
    padding: 10,
    borderBottomWidth:2,
    borderBottomColor:'red',
  },
  droppedTree: {
    width: 155,
    height: 215,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    top: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  droppedImg: {
    width: 155,
    height: 150,
    borderRadius: 10,
  },

  nameTree: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginHorizontal: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  price: {
    color: '#002140',
    fontSize: 12,
  },
});
