import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ItemProductPopular from '../../components/items/ItemProductSale';
import ItemPopular from '../../components/items/ItemPopular';
import useAutoplay from '../../hooks/useAutoplay';
import useFetchData from '../../hooks/useFetchInfoTrees';

const {width} = Dimensions.get('window');
interface CarouselItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: number | string;
  promotion_price: string;
}
const Home = () => {
  const [carouselData, setCarouselData] = useState<CarouselItem[]>([]);
  const carouselRef = useRef<Carousel<CarouselItem>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useAutoplay(carouselData.length, currentIndex, setCurrentIndex);
  useFetchData(setCarouselData);

  return (
    <ScrollView>
      <View style={styles.containerHome}>
        <View style={styles.titlefield}>
          <Text style={styles.title}>Today</Text>
          <Text style={styles.contentitle}>New & Popular</Text>
        </View>
        <Carousel
          data={carouselData}
          renderItem={({item}) => (
            <View style={styles.imgTitle}>
              <ImageBackground
                source={
                  typeof item.image === 'number'
                    ? item.image
                    : {uri: item.image as string}
                }
                style={styles.img}>
                <View style={styles.imgContent}>
                  <Text style={styles.content}>{item.name}</Text>
                  <Text style={styles.contentdescription}>
                    {item.description}
                  </Text>
                  {/* <Text style={styles.content}>{item.price}</Text> */}
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
        <View style={styles.titlefield}>
          <Text style={styles.contentitle}>Just Dropped</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ItemPopular />
          </ScrollView>
        </View>
        <View style={styles.titlefield}>
          <Text style={styles.contentitle}>Product Sale</Text>
          <View style={styles.popularproduct}>
            <ItemProductPopular />
          </View>
        </View>
      </View>
    </ScrollView>
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
