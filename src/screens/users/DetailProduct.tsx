import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';

import BottomTabs from '../BottomTab/BottomTabs';
import AddToCartButton from '../../components/buttons/AddToCartButton';

const DetailProduct = ({route}: any) => {
  const {product} = route.params;
  return (
    <ScrollView style={styles.DetailContainer}>
      <View style={styles.InfoDetail}>
        <View>
          <View style={styles.contextDetail}>
            <Text style={styles.indoor}>Indoor</Text>
            <View style={styles.contentIndoor}>
              <Image source={require('../../assets/img_detail/Star.png')} />
              <Text>4.8</Text>
            </View>
          </View>
          <View>
            <Text numberOfLines={2} style={styles.infoIndoor}>
              {product.name}
            </Text>
          </View>
        </View>
        <View style={styles.decorIndoor}>
          <View style={{marginVertical: 10}}>
            <View>
              <Text style={styles.priceIndoor}>PRICE</Text>
              <Text style={styles.numberIndoor}>$ 14</Text>
            </View>
            <View style={{marginVertical: 20}}>
              <Text style={styles.priceIndoor}>SIZE</Text>
              <Text style={styles.numberIndoor}>5' h</Text>
            </View>
            <View>
              <View style={styles.imgHeat}>
                <Image source={require('../../assets/img_recommendations/tym.png')} />
              </View>
            </View>
          </View>
          <View>
            <Image
              source={
                typeof product.image === 'number'
                  ? product.image
                  : {uri: product.image as string}
              }
              style={styles.SizeImg}
            />
          </View>
        </View>
      </View>
      <View style={styles.temperature}>
        <View style={styles.overViewContain}>
          <Text style={styles.nameOverview}>Overview</Text>
          <View style={styles.temparature}>
            <View style={styles.lightcontain}>
              <Image source={require('../../assets/img_detail/light.png')} />
              <Text style={styles.nametemp}>LIGHT</Text>
              <Text style={styles.measure}>35-40%</Text>
            </View>
            <View>
              <Image source={require('../../assets/img_detail/khogkhi.png')} />
              <Text style={styles.nametemp}>TEMPERATURE</Text>
              <Text style={styles.measure}>70-75 F</Text>
            </View>
            <View>
              <Image source={require('../../assets/img_detail/water.png')} />
              <Text style={styles.nametemp}>WATER</Text>
              <Text style={styles.measure}>250ml</Text>
            </View>
          </View>
        </View>
        <View style={styles.aboutContain}>
          <Text style={styles.nameAbout}>About</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <AddToCartButton item={product}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  DetailContainer: {
    flex: 1,
  },
  InfoDetail: {
    width: '100%',
   
    backgroundColor: '#DEEAD8',
    borderBottomLeftRadius: 41,
    flex:2
  },
  temperature:{
    width: '100%',
    borderBottomLeftRadius: 41,
    flex:2
  },
  contextDetail: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  indoor: {
    fontSize: 14,
    color: '#435B71',
  },
  contentIndoor: {
    width: 56,
    height: 21,
    backgroundColor: '#0D986A',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  infoIndoor: {
    fontSize: 35,
    fontWeight: 'bold',
    width: 177,
    color: '#435B71',
    marginHorizontal: 20,
  },
  decorIndoor: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceIndoor: {
    fontSize: 12,
    color: '#435B71',
  },
  numberIndoor: {
    fontSize: 17,
    color: '#002140',
  },
  imgHeat: {
    backgroundColor: 'white',
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SizeImg: {
    width: 152,
    height: 160,
    borderRadius: 10,
  },
  overViewContain: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  nameOverview: {
    fontSize: 16,
    color: '#002140',
  },
  temparature: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  lightcontain: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nametemp: {
    fontSize: 9,
    color: '#435B71',
  },
  measure: {
    color: '#0D986A',
    fontSize: 13,
  },
  aboutContain: {
    marginHorizontal: 20,
  },
  nameAbout: {fontSize: 16, color: '#002140'},
  description: {
    fontSize: 11,
    color: '#002140',
    marginVertical: 10,
  },
  containerAddtocart: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  addtocart: {
    width: '90%',
    height: 48,
    backgroundColor: '#0D986A',
    borderRadius: 50,
    justifyContent: 'center',
    marginTop:40
  },
  addtocarts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imgCart: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 100,
  },
  nameAddcart: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  priceAddcart: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
