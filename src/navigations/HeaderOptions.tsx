import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const HeaderOptions = () => {
    const navigation = useNavigation();
return (
  <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
    <Image
      source={require('../assets/img_detail/Header.png')}
      style={{
        width: 100,
        height: 35,
        alignItems: 'center',
        marginHorizontal: 0,
      }}
    />
    <View
      style={{
        flexDirection: 'row',
        marginRight: 10,
        justifyContent: 'space-around',
        width: 100,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('WishList');
        }}>
        <AntDesign name="hearto" color="black" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SearchScreen');
        }}>
        <AntDesign name="search1" color="black" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('cart');
        }}>
        <AntDesign name="shoppingcart" color="black" size={24} />
      </TouchableOpacity>
    </View>
  </View>
)};

export default HeaderOptions;
