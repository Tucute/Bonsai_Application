import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import useGetUser from '../../hooks/useGetUser';

export default function PlantStore({navigation}: any) {
  const {profileData} = useGetUser();
  const data = JSON.stringify(profileData);
  const personnalData = JSON.parse(data);

  const NavigateBonsaiTree = () => {
    navigation.navigate('BonsaiList');
  };

  const NavigateOrder = () => {
    navigation.navigate('StatusOrder');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStore}>My Store</Text>
      <View style={styles.profileSeller}>
        <Text style={styles.titleAdress}>The owner: {personnalData[0].name}</Text>
        <View style={styles.logo}>
          <Image
            source={{uri: personnalData[0].avatar}}
            style={styles.logoImage}
          />
        </View>
      </View>
      <Text style={styles.titleAdress}>
        Address: {personnalData[0].address}
      </Text>
      <View style={styles.listActions}>
        <TouchableOpacity onPress={NavigateOrder} style={styles.action}>
          <Text style={styles.titleAction}>Status Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={NavigateBonsaiTree}>
          <Text style={styles.titleAction}>Bonsai tree</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.review}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileSeller: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStore: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#98C13F',
  },
  listActions: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: 20,
  },
  action: {
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#D6E4E8',
  },
  titleAction: {
    color: 'blue',
    fontWeight: 'bold',
  },
  titleAdress: {
    color: 'grey',
    fontSize: 12,
  },
  review: {},
  logo: {
    backgroundColor: 'tomato',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  logoImage: {
    width: 50,
    height: 100,
  },
});
