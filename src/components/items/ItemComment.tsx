import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

interface User {
  name: string;
  avatar: string;
}
interface Comment {
  comment: string;
  rate: number;
  user: User;
}
interface Data {
  data: Comment;
}
const ItemComment = ({data}: Data) => {
  return (
    <TouchableOpacity style={styles.ItemContainer}>
      <Image style={styles.imageUser} source={{uri: data.user.avatar}} />
      <View style={styles.content}>
        <View style={styles.viewName}>
          <View>
            <Text style={styles.name}>{data.user.name}</Text>
            <Text style={styles.date}>8/01/2024</Text>
          </View>
          <View style={styles.viewRate}>
            <Image style={styles.iconStar} source={require('../../assets/images/iconStar.png')} />
            <Text style={styles.rate}>{data.rate}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.textComment}>{data.comment} Shop tư vấn nhiệt tình và đặc biệt là sản phẩm rất đẹp</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ItemComment;

const styles = StyleSheet.create({
  ItemContainer: {
    flex: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 10,
    minHeight: 100,
    borderRadius: 15,
    borderColor: '#F4F4F4',
    shadowColor: '#5A6CEA',
    shadowOffset: {
      width: 12,
      height: 26,
    },
    shadowRadius: 50,
    shadowOpacity: 0.07,
    elevation: 3,
  },
  content: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 10,
    color: '#808080',
    marginBottom: 5,
  },
  rate: {
    fontSize: 14,
    color: 'blue',
    fontWeight: '800',
    marginLeft: 8,
  },
  imageUser: {
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 14,
  },
  viewName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewRate: {
    flexDirection: 'row',
    backgroundColor: '#0022',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 100,
    padding: 5,
  },
  iconStar: {
    width: 20,
    height: 20,
  },
  textComment: {
    fontSize: 10,
    color: '#000',
  },
});