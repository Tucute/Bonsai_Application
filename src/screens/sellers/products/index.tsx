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
          <Text style={styles.itemPrice}>Price: {item.price}</Text>
          <Text style={styles.itemPromotionPrice}>
            Promotion price: {item.promotion_price}
          </Text>
        </View>
        <View style={styles.listAction}>
          <Pressable style={styles.buttonAction}>
            <Image
              style={styles.imageEdit}
              source={require('../../../assets/Images/edit.png')}
            />
          </Pressable>
          <Pressable onPress={delelteItem(item.id)} style={styles.buttonAction}>
            <Image
              style={styles.imageDelete}
              source={require('../../../assets/Images/delete.png')}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.itemContainer}>
      <Pressable style={styles.actionAdd}>
        <Image
          style={styles.imageAdd}
          source={require('../../../assets/Images/add.png')}
        />
        <Text style={styles.textAdd}>Add</Text>
      </Pressable>
      <FlatList
        data={dataBonsai}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  detailItem: {},
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
  },
  actionAdd: {
    flexDirection: 'row',
    gap: 10,
    width: 100,
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
});

export default BonsaiList;
