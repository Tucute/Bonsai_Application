import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import ItemProductPopular from '../../components/items/ItemProductSale';
import ItemPopular from '../../components/items/ItemPopular';
const Home = () => {
  return (
    <ScrollView>
      <View style={styles.containerHome}>
        <View style={styles.titlefield}>
          <Text style={styles.title}>Today</Text>
          <Text style={styles.contentitle}>New & Popular</Text>
        </View>
        <View style={styles.imgTitle}>
          <ImageBackground
            source={require('../../assets/img_home/img.png')}
            style={styles.img}>
            <View style={styles.imgContent}>
              <Text style={styles.content}>NEW IN</Text>
              <Text style={styles.contentdescription}>
                Nike SB Janoski QS Turbo Green Tie Dye Skate Shoes
              </Text>
              <Text style={styles.content}>$89.00 USD</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.titlefield}>
          <Text style={styles.contentitle}>Product Popular</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           <ItemPopular/>
          </ScrollView>
        </View>
        <View style={styles.titlefield}>
          <Text style={styles.contentitle}>Product Sale</Text>
          <View style={styles.popularproduct}>
            <ItemProductPopular/>
            <ItemProductPopular/>
            <ItemProductPopular/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: 'white',
  },
  titlefield: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  contentitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  imgTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 345,
    height: 308,
  },

  content: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  imgContent: {
    marginHorizontal: 24,
    marginTop: 170,
  },
  contentdescription: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  popularproduct: {
    marginTop: 5,
    marginBottom: 50,
  },
});
