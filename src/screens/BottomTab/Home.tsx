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
          <Text style={styles.contentitle}>Just Dropped</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginTop: 5, flexDirection: 'row', marginBottom:50}}>
            <View style={{width:150, height:218, marginHorizontal:10, alignItems:"center", justifyContent:"center"}}>
              <Image
                source={require('../../assets/justDropped/img.png')}
                style={{width: 150, height: 150}}
              />
              <Text style={{alignItems:"center", justifyContent:"center"}}>Dose Media</Text>
              <Text>$92.99 USD</Text>
            </View>
            <View style={{width:150, height:218, marginHorizontal:10 ,alignItems:"center", justifyContent:"center"}}>
              <Image
                source={require('../../assets/justDropped/img1.png')}
                style={{width: 150, height: 150}}
              />
              <Text>Dose Media</Text>
              <Text>$92.99 USD</Text>
            </View>
            <View style={{width:150, height:218, marginHorizontal:10,alignItems:"center", justifyContent:"center"}}>
              <Image
                source={require('../../assets/justDropped/img2.png')}
                style={{width: 150, height: 150}}
              />
              <Text>Dose Media</Text>
              <Text>$92.99 USD</Text>
            </View>
          </View>
          </ScrollView>
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
});
