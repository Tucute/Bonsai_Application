import { StyleSheet, Text, View, Image, FlatList , TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import useWishList from '../../hooks/useWishList';
import { SwipeListView } from 'react-native-swipe-list-view';
import AntDesign from 'react-native-vector-icons/AntDesign';

const WishList = () => {
  const { dataWishList, removeItemFromWishList } = useWishList();
  
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.listItem}>
        <SwipeListView
          data={[item]}
          disableRightSwipe={true}
          rightOpenValue={-75}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          renderItem={(rowData, rowMap) => (
            <TouchableOpacity
              style={styles.popularTree}
              onPress={() => console.log('You pressed the item')}>
              <ImageBackground
                source={
                  typeof item.image === 'number'
                    ? item.image
                    : { uri: item.image as string }
                }
                style={styles.popularImg}>
              </ImageBackground>
              <View style={styles.infotree}>
                <View>
                  <Text style={styles.nametree}>{item.name}</Text>
                  <Text style={styles.slogan}>Monstera family{item.id}</Text>
                </View>
                <Text style={styles.prices}>
                  {item.promotion_price === item.price
                    ? `$${item.price}`
                    : `$${item.promotion_price}`}
                  {item.promotion_price !== item.price && (
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
            </TouchableOpacity>
          )}
          renderHiddenItem={(rowData, rowMap) => (
            <View style={styles.rowBack}>
              <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => removeItemFromWishList({itemId: item.id})}>
                <Text style={styles.backTextWhite}><AntDesign name="delete" color="black" size={24} /></Text>
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={0}
        />
      </View>
    );
  };

  return (
    <>
    <View style={{alignItems:"center", justifyContent:"center", padding:10}}>
      <Text>Lướt sang trái để bỏ Wishlist</Text>
    </View>
    
      <FlatList
        data={dataWishList}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default WishList;

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', 
    paddingVertical: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  popularTree: {
    width: '90%',
    height: 100,
    backgroundColor: '#DCE8D6',
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
    shadowColor: '#000',
    marginHorizontal:20,
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
    borderRadius:10,
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
  
  
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
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
  tym: {
    width: 24,
    height: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '70%',
    marginTop: '70%',
  },
  rowBack: {
    width: '90%',
    height: 100,
    backgroundColor: '#DCE8D6',
    borderRadius: 10,
    flexDirection: 'row',
    marginVertical: 5,
    shadowColor: '#000',
    marginHorizontal:20,
    
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    borderRadius:10
  },
  backRightBtnRight: {
    backgroundColor: 'green',
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
  },
});
