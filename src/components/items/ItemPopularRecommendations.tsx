import {StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';

const ItemPopularRecommendations = () => {
  return (
    <View style={styles.pros}>
      <TouchableOpacity style={styles.Content}>
        <ImageBackground
          source={require('../../assets/img_profile/popular.png')}
          style={styles.imgpopular}>
          <View style={styles.tym}>
            <Image
              source={require('../../assets/img_recommendations/tym.png')}
              style={styles.imgtym}
            />
          </View>
        </ImageBackground>
        <View style={{justifyContent: 'center'}}>
          <View style={styles.namepopular}>
            <Text style={styles.name}>Echeveria</Text>
            <Text style={{color: '#FFBB56'}}>
              <Image
                source={require('../../assets/img_profile/Star.png')}></Image>
              5,0
            </Text>
          </View>
          <Text style={{fontSize: 12}}>From 3 Inch</Text>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>25 $</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemPopularRecommendations;

const styles = StyleSheet.create({
  pros: {
    height: 80,
    width: '100%',
    backgroundColor: '#F2F7FF',
    borderRadius: 10,
    marginVertical: 10,
  },
  Content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imgpopular: {
    width: 80,
    height: 80,
  },
  namepopular: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
  },
  tym: {
    width: 24,
    height: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgtym: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
