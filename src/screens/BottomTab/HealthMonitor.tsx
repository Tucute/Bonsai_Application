import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
const HealthMonitor = () => {
  return (
    <ScrollView style={styles.healthContainer}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.monstera}>
          <View style={styles.monsteracontainer}>
            <View>
              <Text style={styles.namemonstera}>Monstera</Text>
              <Text style={styles.indoor}>Indoor</Text>
            </View>
            <Image source={require('../../assets/imgHealth/bettary.png')} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={styles.overView}>OverView</Text>
            <View style={styles.temp}>
              <View style={styles.temps}>
                <View>
                  <View style={styles.light}>
                    <Image
                      source={require('../../assets/imgHealth/light.png')}
                    />
                    <Text style={styles.namelight}>LIGHT</Text>
                    <Text style={styles.amount}>35-40%</Text>
                  </View>
                  <View style={styles.light}>
                    <Image
                      source={require('../../assets/imgHealth/temparature.png')}
                    />
                    <Text style={styles.namelight}>Humidity</Text>
                    <Text style={styles.amount}>80%</Text>
                  </View>
                </View>
                <View>
                  <View style={styles.light}>
                    <Image
                      source={require('../../assets/imgHealth/humidity.png')}
                    />
                    <Text style={styles.namelight}>TEMPERATURE</Text>
                    <Text style={styles.amount}>70-75 F</Text>
                  </View>
                  <View style={styles.light}>
                    <Image
                      source={require('../../assets/imgHealth/water.png')}
                    />
                    <Text style={styles.namelight}>WATER</Text>
                    <Text style={styles.amount}>250ml</Text>
                  </View>
                </View>
              </View>
              <Image
                source={require('../../assets/imgHealth/Intersect.png')}
                style={{width: 152, height: 172}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: 160,
                height: 25,
                backgroundColor: '#FFECDD',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('../../assets/imgHealth/glass.png')} />
              <Text>Your plant is healthy</Text>
            </View>
          </View>
        </View>
        <View style={styles.JandaBolong}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
              marginHorizontal: 20,
            }}>
            <View>
              <Text
                style={{fontSize: 20, color: '#013220', fontWeight: 'bold'}}>
                Janda Bolong
              </Text>
              <Text style={{fontSize: 15, color: '#476C5F'}}>Outdoor</Text>
            </View>
            <Image source={require('../../assets/imgHealth/bettary.png')} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 15, color: '#013220', fontWeight: 'bold'}}>
              OverView
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View>
                  <View style={styles.light}>
                    <Image
                      source={require('../../assets/imgHealth/light.png')}
                    />
                    <Text style={styles.namelight}>LIGHT</Text>
                    <Text style={styles.amount}>35-40%</Text>
                  </View>
                  <View style={styles.light}>
                    <Image
                      source={require('../../assets/imgHealth/temparature.png')}
                    />
                    <Text style={styles.namelight}>Humidity</Text>
                    <Text style={styles.amounts}>50%</Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                    }}>
                    <Image
                      source={require('../../assets/imgHealth/humidity.png')}
                    />
                    <Text style={styles.namelight}>TEMPERATURE</Text>
                    <Text style={styles.amount}>70-75 F</Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                    }}>
                    <Image
                      source={require('../../assets/imgHealth/water.png')}
                    />
                    <Text style={styles.namelight}>WATER</Text>
                    <Text style={styles.amounts}>50ml</Text>
                  </View>
                </View>
              </View>
              <Image
                source={require('../../assets/imgHealth/Intersects.png')}
                style={{width: 152, height: 172}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: 160,
                height: 25,
                backgroundColor: '#DEEAD8',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('../../assets/imgHealth/kettle.png')} />
              <Text>Your plant is thirsty</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HealthMonitor;

const styles = StyleSheet.create({
  healthContainer: {
    flex: 1,
  },
  monstera: {
    height: 310,
    width: '95%',
    backgroundColor: '#DEEAD8',
    borderBottomLeftRadius: 40,
    marginVertical: 10,
  },
  JandaBolong: {
    height: 310,
    width: '95%',
    backgroundColor: '#FFEDCA',
    borderBottomLeftRadius: 40,
    marginVertical: 10,
    marginBottom:60
  },
  monsteracontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  namemonstera: {
    fontSize: 20,
    color: '#013220',
    fontWeight: 'bold',
  },
  indoor: {
    fontSize: 15,
    color: '#476C5F',
  },
  overView: {
    fontSize: 15,
    color: '#013220',
  },
  temp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temps: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  light: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  namelight: {
    fontSize: 10,
    color: '#013220',
  },
  amount: {
    fontSize: 10,
    color: '#0D986A',
  },
  amounts: {
    fontSize: 10,
    color: 'red',
  },
});
