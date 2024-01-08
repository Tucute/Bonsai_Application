import {View, Text, TouchableOpacity,StyleSheet,FlatList} from 'react-native';
import React from 'react';
import { Image } from 'react-native-elements';
export default function ManagementOrder() {
  // const [data]
  return (
    <View style={styles.container}>
      <View style={styles.contenContainer}>
        <View style={styles.contenText}>
            <Image source={require('../../assets/images/icondonhang.jpg')} style={styles.image}/>
          <Text style={styles.textItemHeader}>Đã gửi đơn hàng </Text>
          <Text style={styles.textItem}>Thông tin vận chuyển của bạn:ửewrewerwennnnnnnewtrrew</Text>
          <View style={styles.buttomText}>
            <TouchableOpacity>
              <Text style={styles.bottomtextItem}>Thay đổi địa chỉ</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.bottomtextItem}>Xem đơn hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ContenSearch}>
          <Text style={styles.textSearch}>Tìm kiếm |</Text>
          <Text style={styles.textSearch}>Đề xuất</Text>
        </View>
        <View>

        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey',
    },
    contenContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    contenText:{
        backgroundColor:'#fff',
        width:'100%',
        paddingHorizontal:12,
        justifyContent:'center',
        alignItems:'center',
       padding:15,
    },
    textItem:{
        color:'black',
        paddingVertical:8,
    },
    textItemHeader:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
    },
    buttomText:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    bottomtextItem:{
        color:'black',
        borderWidth:1,
        marginHorizontal:12,
        marginVertical:12,
        height:40,
        padding:10,
    },
    image:{
        width:60,
        height:60,
    },
    ContenSearch:{
      flexDirection:'row',
      backgroundColor:'#fff',
      marginTop:6,
      width:'100%',
      height:40,
      gap:70,
      paddingLeft:22,
    },
    textSearch:{
      color:'black',
      padding:10,
    }
})
