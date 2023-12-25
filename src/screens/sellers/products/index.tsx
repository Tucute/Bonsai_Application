import React from 'react';
import {View, Text, Pressable, StyleSheet, FlatList, Image} from 'react-native';
import useBonsai, {BonsaiType} from '../../../hooks/useBonsai';

const BonsaiList: React.FC = () => {
  const {dataBonsai, deleteBonsai} = useBonsai();
  const delelteItem = (id: string) => () => {
    deleteBonsai(id);
  };

  const renderItem = ({item}: {item: BonsaiType}) => {
    return (
      <View style={styles.item}>
        <Image style={styles.itemImage} source={{uri: item.image}} />
        <View style={styles.detailItem}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>Price: {item.price},000 vnd</Text>
          <Text style={styles.itemPromotionPrice}>
            Promotion price: {item.promotion_price}
          </Text>
        </View>
        <View style={styles.listAction}>
          <Pressable style={styles.buttonAction}>
            <Image
              style={styles.imageEdit}
              source={require('../../../assets/images/edit.png')}
            />
          </Pressable>
          <Pressable onPress={delelteItem(item.id)} style={styles.buttonAction}>
            <Image
              style={styles.imageDelete}
              source={require('../../../assets/images/delete.png')}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.button}>
        <Pressable style={styles.actionAdd}>
          <Image
            style={styles.imageAdd}
            source={require('../../../assets/images/add.png')}
          />
          <Text style={styles.textAdd}>Add new</Text>
        </Pressable>
      </View>
      <FlatList
        data={dataBonsai}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 15,
    //backgroundColor: 'red',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  detailItem: {
    marginHorizontal: 10,
    width: 180,
  },
  itemName: {},
  itemDescription: {},
  itemPrice: {},
  itemPromotionPrice: {},
  buttonAction: {
    width: 50,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageAdd: {
    width: 30,
    height: 30,
    tintColor: 'tomato',
  },
  imageDelete: {
    width: 20,
    height: 20,
    tintColor: 'red',
  },
  imageEdit: {
    width: 20,
    height: 20,
    tintColor: 'blue',
  },
  listAction: {
    gap: 15,
    flexDirection: 'column',
  },
  actionAdd: {
    flexDirection: 'row',
    gap: 10,
    width: 150,
    height: 45,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAdd: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 20,
  },
});

export default BonsaiList;
