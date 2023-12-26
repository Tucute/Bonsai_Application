import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';

const ItemProductWishlist = () => {
  return (
    <View style={styles.popularTree}>
      <Image
        source={require('../../assets/img_popular/Intersect.png')}
        style={styles.popularImg}
      />
      <View style={styles.infotree}>
        <View>
          <Text style={styles.nametree}>Monstera Adansonii</Text>
          <Text style={styles.slogan}>Monstera family</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.prices}>$ 15</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/img_detail/Icon_Star.png')}
              
            />
            <Text style={{fontSize:12, color:"#FFBB56"}}>4.9</Text>
          </View>
        </View>
      </View>
      <View style={styles.plus}>
        <View style={styles.imgPlus}>
          <Image
            source={require('../../assets/img_detail/heat.png')}
            style={styles.plusImg}></Image>
        </View>
      </View>
    </View>
  );
};

export default ItemProductWishlist;

const styles = StyleSheet.create({
  popularTree: {
    width: '100%',
    height: 100,
    backgroundColor: '#DCE8D6',
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  popularImg: {
    width: 100,
    height: 90,
  },
  nametree: {
    fontSize: 14,
    color: '#002140',
    fontWeight: 'bold',
  },
  slogan: {
    color: '#002140',
    fontSize: 12,
  },
  prices: {
    color: '#002140',
    fontSize: 17,
  },
  infotree: {
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  imgPlus: {
    backgroundColor: '#C3DCB7',
    width: 50,
    height: 50,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusImg: {
    width: 20,
    height: 20,
  },
});
