import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import useFetchInfoTrees from '../../hooks/useFetchInfoTrees';
interface CarouselItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  promotion_price: string;
}
const ItemPopular = () => {
  function shuffleArray(array: any) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const shuffledData = shuffleArray(useFetchInfoTrees());

  const navigation = useNavigation();

  return (
    <View style={styles.dropped}>
      <FlatList
        data={shuffledData.slice(0, 3)}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.droppedTree}
            onPress={() =>
              navigation.navigate('DetailProduct', {product: item})
            }>
            <Image
              source={
                typeof item.image === 'number'
                  ? item.image
                  : {uri: item.image as string}
              }
              style={styles.droppedImg}
            />
            <Text style={styles.nameTree}>{item.name}</Text>
            <Text>
              {item.promotion_price === item.price ? (
                <Text style={styles.price}>${item.price}</Text>
              ) : (
                <Text style={styles.price}>${item.promotion_price}</Text>
              )}

              {item.promotion_price !== item.price && (
                <Text style={styles.originalPrice}>${item.price}</Text>
              )}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
};

export default ItemPopular;

const styles = StyleSheet.create({
  dropped: {
    marginTop: 5,
    flexDirection: 'row',
  },
  droppedTree: {
    width: 150,
    height: 'auto',
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#0D986A',
    top: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  droppedImg: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },

  nameTree: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    marginHorizontal: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  price: {
    color: '#002140',
    fontSize: 12,
  },
});
