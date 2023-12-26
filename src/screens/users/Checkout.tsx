import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ItemProductCart from '../../components/items/ItemProductCart';

const Checkout = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewAddress}>
        <Text style={styles.nameUser}>A Ân Tứ</Text>
        <Text style={styles.phoneUser}>(+84) 366702225</Text>
        <Text style={styles.AddressUser}>
          101B Lê Hữu Trác, Phước Mỹ, Sơn Trà, Đà Nẵng
        </Text>
      </View>
      <View style={styles.viewShowItem}>
        <ItemProductCart />
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
          <Text>12.461đ</Text>
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
        <Text style={styles.totalItem}>1 mặt hàng, tổng cộng 191.439đ</Text>
      </View>
      <View style={styles.sumarizeOrder}>
        <Text style={styles.titleOrder}>Tóm tắt đơn hàng</Text>
        <View style={styles.listInfo}>
          <Text>Tổng phụ</Text>
          <Text>236.717đ</Text>
        </View>
        <View style={styles.listInfo}>
          <Text>Vận chuyển</Text>
          <Text>236.717đ</Text>
        </View>
        <View style={styles.listInfo}>
          <Text>Shipping discount</Text>
          <Text>236.717đ</Text>
        </View>
        <View style={styles.listInfo}>
          <Text style={styles.total}>Tổng</Text>
          <Text style={styles.total}>271.600đ</Text>
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
          <Text style={styles.textTotalPrice}>276.700đ</Text>
        </View>
        <Text style={styles.textSave}>Bạn đã tiết kiệm được 40.000đ</Text>
        <TouchableOpacity style={styles.btnOrder}>
          <Text style={styles.textOrder}>ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewAddress: {
    padding: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  nameUser: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 5,
    color: '#000',
  },
  phoneUser: {
    fontSize: 18,
  },
  AddressUser: {
    marginTop: 5,
    fontSize: 18,
  },
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
  sumarizeOrder: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 20,
  },
  titleOrder: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  listInfo: {
    paddingVertical: 8,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  viewPayment: {
    backgroundColor: '#fff',
    padding: 20,
  },
  cash: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  viewCOD: {
    backgroundColor: 'green',
    padding: 2,
    color: '#fff',
  },
  textPayment: {
    marginLeft: 20,
    fontSize: 16,
    color: '#000',
  },
  viewVNpay: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  VNpay: {
    width: 33,
    height: 32,
    objectFit: 'contain',
  },
  textVNpay: {
    marginLeft: 20,
    fontSize: 16,
    color: '#000',
  },
  viewTotalOrder: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#fff',
  },
  totalOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTotalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  textSave: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  btnOrder: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 20,
  },
  textOrder: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Checkout;
