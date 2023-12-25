import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BottomTabs from '../BottomTab/BottomTabs';
const DetailProduct = () => {
  return (
    <View style={styles.DetailContainer}>
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
              Monstera Adansonii
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
              <Text style={{fontSize: 12, color: '#435B71'}}>size</Text>
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
              source={require('../../assets/img_detail/Intersectss.png')}
              style={{width: 252, height: 220}}
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
            The Monstera Adansonii grows best in a well-draining Aroid mix using
            bark, perlite, peat moss, and charcoal. Keep your plant in bright
            indirect light and humidity .
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={{
              width: '90%',
              height: 48,
              backgroundColor: '#0D986A',
              borderRadius: 50,
              justifyContent:"center"
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: "space-between",
                  flexDirection: 'row',
                  width:100
                }}>
                <Image source={require('../../assets/img_detail/cart.png')} />
                <Text
                  style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
                  Add to Cart
                </Text>
              </View>
              <View>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                  $ 15
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <BottomTabs/>
    </View>
    
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