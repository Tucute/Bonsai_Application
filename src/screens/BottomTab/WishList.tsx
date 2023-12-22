import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import ItemProductWishlist from '../../components/items/ItemProductWishlist';
const WishList = () => {
  return (
    <ScrollView>
      <View style={styles.wishListContainer}>
        <View style={styles.imgTitle}>
          <View style={styles.img}>
            <View style={styles.imgContent}>
              <View>
                <Text style={styles.title}>Monstera </Text>
                <Text style={styles.slogantitle}>Indoor</Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/img_WishList/Group.png')}
                />
              </View>
              {/* <Text style={styles.content}>NEW IN</Text>
              <Text style={styles.contentdescription}>
                Nike SB Janoski QS Turbo Green Tie Dye Skate Shoes
              </Text>
              <Text style={styles.content}>$89.00 USD</Text> */}
            </View>
            <View style={styles.OverViewContainer}>
              <Text style={styles.Overview}>Overview</Text>
              <View style={styles.temparature}>
                <View style={styles.fieldOverview}>
                  <View style={styles.OverViewContainer}>
                    <View style={styles.overviewItem}>
                      <Image
                        source={require('../../assets/img_WishList/sky.png')}
                      />
                      <Text style={styles.overviewText}>LIGHT</Text>
                      <Text style={styles.overviewValue}>35-40%</Text>
                    </View>
                    <View style={styles.overviewItem}>
                      <Image
                        source={require('../../assets/img_WishList/waters.png')}
                      />
                      <Text style={styles.overviewText}>Humidity</Text>
                      <Text style={styles.overviewValue}>80%</Text>
                    </View>
                  </View>
                  <View style={styles.OverViewContainer}>
                    <View style={styles.overviewItem}>
                      <Image
                        source={require('../../assets/img_WishList/health.png')}
                      />
                      <Text style={styles.overviewText}>TEMPERATURE</Text>
                      <Text style={styles.overviewValue}>70-75 F</Text>
                    </View>
                    <View style={styles.overviewItem}>
                      <Image
                        source={require('../../assets/img_WishList/waterss.png')}
                      />
                      <Text style={styles.overviewText}>WATER</Text>
                      <Text style={styles.overviewValue}>250ml</Text>
                    </View>
                  </View>
                </View>
                <Image
                  source={require('../../assets/img_detail/Intersectss.png')}
                  style={{width: 200, height: 250, marginBottom: 100}}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.titlefield}>
          <Text style={styles.contentitle}>Product WishList</Text>
          <View style={styles.popularproduct}>
            <ItemProductWishlist />
            <ItemProductWishlist />
            <ItemProductWishlist />
            <ItemProductWishlist />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WishList;

const styles = StyleSheet.create({
  wishListContainer: {
    flex: 1,
  },
  imgTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  title: {
    color: '#013220',
    fontSize: 20,
    fontWeight: 'bold',
  },
  slogantitle: {
    fontSize: 20,
  },
  img: {
    width: 345,
    height: 308,
    backgroundColor: '#DEEAD8',
    borderBottomLeftRadius: 70,
  },

  content: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  imgContent: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  contentdescription: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  titlefield: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  contentitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  popularproduct: {
    marginTop: 5,
    marginBottom: 50,
  },
  Overview: {
    fontSize: 15,
    color: '#013220',
  },
  temparature: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  fieldOverview: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    height: 350,
  },
  OverViewContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  overviewItem: {
    marginVertical: 10,
  },
  overviewText: {
    fontSize: 10,
    color: '#013220',
  },
  overviewValue: {
    fontSize: 10,
    color: '#0D986A',
  },
});
