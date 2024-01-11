import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground,Dimensions} from 'react-native';
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
const staticCarouselData = [
  {
    id: 1,
    name: 'Plant 1',
    description: 'Description for Plant 1',
    price: '$50',
    image: 'https://hoayeuthuong.com/hinh-hoa-tuoi/cay-de-ban/8204_everyday-with-you.jpg',
    promotion_price: '$45',
  },
  {
    id: 2,
    name: 'Plant 2',
    description: 'Description for Plant 2',
    price: '$60',
    image: 'https://bonsaivietnam.com.vn/storage/tung-la-han-cay-canh-18-1659724189677555072607.jpg',
    promotion_price: '$55',
  },
  // Thêm các items khác nếu cần
];
export default function PlantStore({navigation}: any) {
  const carouselData = staticCarouselData;
  const carouselRef = useRef<Carousel<CarouselItem>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useAutoplay(carouselData.length, currentIndex, setCurrentIndex);
  const NavigateBonsaiTree = () => {
    navigation.navigate('BonsaiList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStore}>My Store</Text>
      <View style={styles.header}>
        
        <View style={styles.profileSeller}>
          <Text style={styles.titleAdress}>A An Tu</Text>
          <View style={styles.logo}>
            <Image
              source={require('../../assets/images/Sark.png')}
              style={styles.logoImage}
            />
          </View>
        </View>
        <Text numberOfLines={1} style={styles.titleAdress}>
          101B Le Huu Trac, Phuoc My, Son Tra, Da Nang
        </Text>
      </View>
      <View style={styles.body}>
        <Carousel
          data={carouselData}
          renderItem={({item}) => (
            <View style={styles.imgTitle}>
              <ImageBackground source={{uri: item.image}} style={styles.img}>
                <View style={styles.imgContent}>
                  <Text numberOfLines={2} style={styles.content}>{item.name}</Text>
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
      </View>
      <View style={styles.footer}>
        <View style={styles.listActions}>
          <TouchableOpacity style={styles.action}>
            <Text style={styles.titleAction}>Status Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={NavigateBonsaiTree}>
            <Text style={styles.titleAction}>Bonsai tree</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.review}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flex: 2,
    padding:20
  },
  body: {
    flex: 4,
    alignItems:"center",
    justifyContent:"center"
  },
  footer: {
    flex: 1,
  },
  profileSeller: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStore: {
    paddingTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#98C13F',
  },
  listActions: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: 20,
  },
  action: {
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#D6E4E8',
  },
  titleAction: {
    color: 'blue',
    fontWeight: 'bold',
  },
  titleAdress: {
    color: 'grey',
    fontSize: 14,
  },
  review: {},
  logo: {
    backgroundColor: 'tomato',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  logoImage: {
    width: 50,
    height: 100,
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
    width: "100%",
    height: "100%",
    marginHorizontal:20
  },
  content: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    
  },
  imgContent: {
    marginHorizontal: 24,
    marginTop:"60%",
    width:"80%",
    height:"auto",
    backgroundColor: "rgba(214, 228, 232, 0.6)",
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    borderRadius:10
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
