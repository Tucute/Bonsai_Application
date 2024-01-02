import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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
      color: '#000',
    },
    AddressUser: {
      marginTop: 5,
      fontSize: 18,
      color: '#000',
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