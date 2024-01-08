import {View, Text,StyleSheet} from 'react-native';
import React from 'react';
export default function ManagementYourOrder() {
  return (
    <View style={styles.container}>
      <View style={styles.contentOrder}>
        <Text style={styles.textOrder}>Đã đặt hàng</Text>
        <Text style={styles.textOrder}>Đơn hàng{'\n'} đang chờ{'\n'} vận chuyển</Text>
        <Text style={styles.textOrder}>Đang vận{'\n'} chuyển </Text>
        <Text style={styles.textOrder}>Đã giao</Text>
      </View>
      <View style={styles.contentFrofile}>
        <Text style={styles.textFrofile}>A Tuấn 0378479412fsfsdfsdfsdfsdfsdf</Text>
        <Text style={styles.textFrofile}>A Tuấn 0378479412fsfsdfsdfsdfsdfsdf</Text>
        <Text style={styles.textFrofile}>A Tuấn 0378479412fsfsdfsdfsdfsdfsdf</Text>
      </View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    contentOrder:{
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:30,
    },
    textOrder:{
        color:'black'
    },
    contentFrofile:{
        backgroundColor:'#fff',
        marginTop:8,
    },
    textFrofile:{
        color:'black',
        paddingHorizontal:12,
        padding:5,
    }
})