import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Carousel from 'react-native-snap-carousel';
import useAutoplay from '../../hooks/useAutoplay';
import useFetchInfoTrees from '../../hooks/useFetchInfoTrees';

const {width} = Dimensions.get('window');

interface CarouselItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  promotion_price: string;
}

const ItemNewPopular = () => {
  const { data, isLoading, isError } = useFetchInfoTrees();
  const carouselRef = useRef<Carousel<CarouselItem>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useAutoplay(data?.length || 0, currentIndex, setCurrentIndex);
  if (isLoading) {
    return <Text style={{marginHorizontal:20}}>Loading...</Text>;
  }
  if (isError) {
    return <Text style={styles.load}>Error loading data</Text>;
  }
  if (!data || data.length === 0) {
    return <Text style={styles.load}>No data available</Text>;
  }
  return (
    <Carousel
      data={data || []}
      renderItem={({item}) => (
        <View style={styles.imgTitle}>
          <ImageBackground
            source={{uri: item.image}}
            style={styles.img}>
            <View style={styles.imgContent}>
              <Text style={styles.content}>{item.name}</Text>
              <Text style={styles.contentdescription}>{item.description}</Text>
              <Text style={styles.content}>{item.price}</Text>
            </View>
          </ImageBackground> 
        </View>
      )}
      ref={carouselRef}
      sliderWidth={width}
      itemWidth={width - 30}
      loop
      autoplayInterval={3000}
      enableSnap
      onSnapToItem={index => setCurrentIndex(index)}
      autoplay={true}
    />
  );
};
export default ItemNewPopular;
const styles = StyleSheet.create({
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
  load:{
    alignItems:"center",
    justifyContent:"center"
  }
});
