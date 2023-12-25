import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import useFetchData from '../../hooks/useFetchData';
interface CarouselItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: number | string;
  promotion_price: string;
}
const ItemProductSale = () => {
  const [carouselData, setCarouselData] = useState<CarouselItem[]>([]);
  useFetchData(setCarouselData);
  return (
    <FlatList
      data={carouselData}
      renderItem={({item}) => (
        <View style={styles.popularTree}>
          <Image
            source={
              typeof item.image === 'number'
                ? item.image
                : {uri: item.image as string}
            }
            style={styles.popularImg}
          />
          <View style={styles.infotree}>
            <View>
              <Text style={styles.nametree}>{item.name}</Text>
              <Text style={styles.slogan}>Monstera family</Text>
            </View>
            <Text style={styles.prices}>
              {item.promotion_price === 0
                ? `$${item.price}`
                : `$${item.promotion_price}`}
              {item.promotion_price !== 0 && (
                <Text style={styles.originalPrice}>${item.price}</Text>
              )}
            </Text>
          </View>
          <View style={styles.plus}>
            <View style={styles.imgPlus}>
              <Image
                source={require('../../assets/img_popular/plus.png')}
                style={styles.plusImg}></Image>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default ItemProductSale;

const styles = StyleSheet.create({
  popularTree: {
    width: '100%',
    height: 100,
    backgroundColor: '#DCE8D6',
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  popularImg: {
    width: 100,
    height: 'auto',
    borderRadius: 10,
  },
  nametree: {
    fontSize: 14,
    color: '#002140',
    fontWeight: 'bold',
    width: 120,
    flexDirection: 'row',
  },
  slogan: {
    color: '#002140',
    fontSize: 12,
  },
  prices: {
    color: '#002140',
    fontSize: 12,
  },
  infotree: {
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  imgPlus: {
    backgroundColor: '#C3DCB7',
    width: 50,
    height: 50,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusImg: {
    width: 20,
    height: 20,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
});
