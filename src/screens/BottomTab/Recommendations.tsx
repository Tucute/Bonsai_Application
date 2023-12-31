import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import ItemProductPopular from '../../components/items/ItemProductSale';

const Recommendations = () => {
  const data = [{key: 'productRecommendation'}];
  const renderItem = ({item}: any) => {
    
    switch (item.key) {
      case 'productRecommendation':
        return (
          <View style={styles.recommendationsContainer}>
            <View>
              <Text style={styles.title}>Recommendations</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <View style={styles.menu}>
                  <View style={styles.titlemenu}>
                    <Text style={styles.titles}>All</Text>
                  </View>
                  <View style={styles.titlemenu}>
                    <Text style={styles.titles}>Cacti</Text>
                  </View>
                  <View style={styles.titlemenu}>
                    <Text style={styles.titles}>In pots</Text>
                  </View>
                  <View style={styles.titlemenu}>
                    <Text style={styles.titles}>Dried flowers</Text>
                  </View>
                  <View style={styles.titlemenu}>
                    <Text style={styles.titles}>In pots</Text>
                  </View>
                </View>
              </ScrollView>
                <View>
                  <View style={styles.popular}>
                    <Text style={styles.titlepopular}>Popularity</Text>
                    <Image
                      source={require('../../assets/img_profile/ArrowDown.png')}
                    />
                  </View>
                </View>
                <View style={styles.free}>
                  <View style={styles.shipping}>
                    <View>
                      <Text style={styles.name}>Free shipping</Text>
                      <View style={styles.order}>
                        <Text style={styles.when}>When ordering</Text>
                        <View style={styles.percent}>
                          <Text style={styles.namepercent}>from 40$</Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={require('../../assets/img_profile/Saly.png')}
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <View style={styles.popularproduct}>
                    <ItemProductPopular />
                  </View>
                </View>
             
            </View>
          </View>
        );
      default:
        return <View />;
    }
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.key}
      renderItem={renderItem}
    />
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  recommendationsContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  recommendations: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  menu: {
    flexDirection: 'row',
    width: 450,
    height: 50,
    marginHorizontal: 20,
    marginRight: 60,
  },
  titlemenu: {
    height: 33,
    backgroundColor: '#F4F4F4',
    width: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  titles: {
    fontSize: 13,
    color: '#505050',
  },
  popular: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  titlepopular: {
    fontSize: 12,
    color: '#000000',
    marginHorizontal: 20,
  },
  productpopular: {
    marginVertical: 10,
  },
  free: {
    width: '95%',
    height: 92,
    backgroundColor: '#E2E9FF',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  shipping: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  order: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 14,
    color: '#000000',
  },
  when: {
    fontSize: 12,
    color: '#808080',
  },
  percent: {
    backgroundColor: '#FFBB56',
    width: 73,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  namepercent: {
    fontSize: 12,
    color: 'white',
  },
  popularproduct: {
    marginTop: 5,
    marginBottom: 50,
    marginHorizontal:20
  },
});
