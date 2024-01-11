import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import useBonsai, {BonsaiType} from '../../../hooks/useBonsai';

const BonsaiList: React.FC = ({navigation}: any) => {
  const {dataBonsai, deleteBonsai} = useBonsai();
  const delelteItem = (id: string) => () => {
    deleteBonsai(id);
  };

  const renderItem = ({item}: {item: BonsaiType}) => {
    return (
      <View style={styles.item}>
        <Image style={styles.itemImage} source={{uri: item.image}} />
        <View style={styles.detailItem}>
          <Text style={styles.titleText}>{item.name}</Text>
          <Text style={styles.titleText}>Price: {item.price}</Text>
          <Text style={styles.titleText}>
            Sale: {item.promotion_price}
          </Text>
        </View>
        <View style={styles.listAction}>
          <Pressable
            style={styles.buttonAction}
            onPress={() =>
              navigation.navigate('ManagementBonsai', {
                mode: 'update',
                bonsaiId: item,
              })
            }>
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
        <TouchableOpacity
          style={styles.actionAdd}
          onPress={() => navigation.navigate('ManagementBonsai', {mode: 'add'})}>
          <Image
            style={styles.imageAdd}
            source={require('../../../assets/images/add.png')}
          />
          <Text style={styles.textAdd}>Add new</Text>
        </TouchableOpacity>
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
    padding: 10,
    backgroundColor: '#FFF',
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  itemImage: {
    width: 65,
    height: 75,
    borderRadius: 5,
  },
  detailItem: {
    marginHorizontal: 20,
    width: 160,
    justifyContent: 'space-between',
  },
  titleText: {color: 'grey'},
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
    tintColor: '#98C13F',
  },
  imageDelete: {
    width: 25,
    height: 25,
    tintColor: 'red',
  },
  imageEdit: {
    width: 25,
    height: 25,
    tintColor: 'blue',
  },
  listAction: {
    gap: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  actionAdd: {
    flexDirection: 'row',
    gap: 6,
    width: 125,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAdd: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'flex-end',
    position: 'absolute',
    zIndex: 100,
    top: '-7%',
    marginLeft: 212,
  },
});

export default BonsaiList;
