import {Image, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import React from 'react';
import BottomTabs from '../BottomTab/BottomTabs';
import AddToCartButton from '../../components/buttons/AddToCartButton';

const DetailProduct = ({route}:any) => {
  const {product}= route.params;
  return (
    <ScrollView style={styles.DetailContainer}>
      <View style={styles.InfoDetail}>
        <View>
          <View style={styles.contextDetail}>
            <Text style={{fontSize: 14, color: '#435B71'}}>Indoor</Text>
            <View
              style={{
                width: 56,
                height: 21,
                backgroundColor: '#0D986A',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
              }}>
              <Image source={require('../../assets/img_detail/Star.png')} />
              <Text>4.8</Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 35,
                fontWeight: 'bold',
                width: 177,
                color: '#435B71',
                marginHorizontal: 20,
              }}>
              {product.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginVertical: 10}}>
            <View>
              <Text style={{fontSize: 12, color: '#435B71'}}>PRICE</Text>
              <Text style={{fontSize: 17, color: '#002140'}}>$ 14</Text>
            </View>
            <View style={{marginVertical: 20}}>
              <Text style={{fontSize: 12, color: '#435B71'}}>SIZE</Text>
              <Text style={{fontSize: 17, color: '#002140'}}>5' h</Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 42,
                  height: 42,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('../../assets/img_detail/heat.png')} />
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
              style={{width: 152, height: 160}}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={{marginHorizontal: 20, marginTop: 15}}>
          <Text style={{fontSize: 16, color: '#002140'}}>Overview</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../../assets/img_detail/light.png')} />
              <Text style={{fontSize: 9, color: '#435B71'}}>LIGHT</Text>
              <Text style={{color: '#0D986A', fontSize: 13}}>35-40%</Text>
            </View>
            <View>
              <Image source={require('../../assets/img_detail/khogkhi.png')} />
              <Text style={{fontSize: 9, color: '#435B71'}}>TEMPERATURE</Text>
              <Text style={{color: '#0D986A', fontSize: 13}}>70-75 F</Text>
            </View>
            <View>
              <Image source={require('../../assets/img_detail/water.png')} />
              <Text style={{fontSize: 9, color: '#435B71'}}>WATER</Text>
              <Text style={{color: '#0D986A', fontSize: 13}}>250ml</Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 16, color: '#002140'}}>About</Text>
          <Text style={{fontSize: 11, color: '#002140', marginVertical: 10}}>
            {product.description}
          </Text>
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
    height: 351,
    backgroundColor: '#DEEAD8',
    borderBottomLeftRadius: 41,
  },
  contextDetail: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
