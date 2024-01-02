import React, {useState, useEffect, useRef} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import ItemProductPopular from '../../components/items/ItemProductSale';
import ItemPopular from '../../components/items/ItemPopular';
import ItemNewPopular from '../../components/items/ItemNewPopular';
const Home = () => {
  const data = [
    {key: 'productSale'},
  ];
  const renderHeader = () => (
    <View>
      <View style={styles.titlefield}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.contentitle}>New & Popular</Text>
      </View>

      <ItemNewPopular />
      <View style={styles.titlefield}>
        <Text style={styles.contentitle}>Just Dropped</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ItemPopular />
        </ScrollView>
      </View>
    </View>
  );
  const renderItem = ({item}: any) => {
    switch (item.key) {
      case 'productSale':
        return (
          <View style={styles.titlefield}>
            <Text style={styles.contentitle}>Product Sale</Text>
            <View style={styles.popularproduct}>
              <ItemProductPopular />
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
      ListHeaderComponent={renderHeader}
    />
  );
};
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
    borderRadius: 20,
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
    height: 80,
  },
  popularproduct: {
    marginTop: 5,
    marginBottom: 50,
  },
});
export default Home;