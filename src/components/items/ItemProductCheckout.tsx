import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
interface Product {
    id: number;
    name: string;
    description: string;
    quantity: number,
    price: number;
    image: string;
    promotion_price: number;
  }
  interface Item {
    item: Product;
  }
const ItemProductCheckout = ({item}: Item) => {
  return (
    <View style={styles.viewShowItem}>
      <View style={styles.item}>
        <Image
          style={styles.imageProduct}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.middleSection}>
          <View>
            <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
            <Text style={styles.subname}>Tam đa cổ tích</Text>
          </View>
          <View style={styles.updateQuantity}>
            <Text style={styles.quantity}>Số lượng:  {item.quantity}</Text>
          </View>
        </View>
        <View style={styles.lastSection}>
          <Text style={styles.price}>$ {item.price}</Text>
          {/* <TouchableOpacity>
            <Image
              style={styles.iconRemove}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3405/3405244.png',
              }}
            />
          </TouchableOpacity> */}
        </View>
      </View>
      <Text style={styles.titleShip}>Vận chuyển tiêu chuẩn trên cả nước</Text>
      <View style={styles.viewShipItem}>
        <View style={styles.viewSmallItem}>
          <Image
            style={styles.Icon}
            source={{
              uri: 'https://www.pngitem.com/pimgs/m/354-3544619_delivery-png-download-fast-delivery-icon-png-transparent.png',
            }}
          />
          <Text>Phí vận chuyển</Text>
        </View>
        <Text>Free shipping</Text>
      </View>
      <View style={styles.viewShipItem}>
        <View style={styles.viewSmallItem}>
          <Image
            style={styles.IconTime}
            source={{
              uri: 'https://static-00.iconduck.com/assets.00/clock-icon-512x512-vtrw1g4c.png',
            }}
          />
          <Text>Ngày giao hàng dự kiến:</Text>
        </View>
        <Text>Dec 31 - Jan 4</Text>
      </View>
      <View style={styles.viewMessage}>
        <Text style={styles.titleMessage}>Tin nhắn</Text>
        <View style={styles.viewSmaillMessage}>
          <Text>Tùy chọn</Text>
          <Image
            style={styles.imgViewMessage}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6399/6399624.png',
            }}
          />
        </View>
      </View>
      <Text style={styles.totalItem}>1 mặt hàng, tổng cộng: ${item.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewShowItem: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  titleShip: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  },
  viewShipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  Icon: {
    width: 30,
    height: 30,
    objectFit: 'contain',
    marginRight: 8,
  },
  IconTime: {
    width: 21,
    height: 21,
    objectFit: 'contain',
    marginRight: 15,
  },
  viewMessage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleMessage: {
    fontSize: 16,
    color: '#000',
  },
  viewSmaillMessage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgViewMessage: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  viewSmallItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalItem: {
    marginTop: 10,
    textAlign: 'right',
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  item: {
    borderRadius: 15,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#DCE8D6',
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
    width: 160,
    paddingHorizontal: 10,
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
    borderRadius: 2,
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
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    
  },
});
export default ItemProductCheckout;
