import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface getProfile {
  email: string;
  name: string;
  avatar: string;
  phone: string;
}
const MyAccount = ({navigation}: any) => {
  const [userData, setUserData] = useState<getProfile>();
  const getUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      const value = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserData(value);
    } catch (e) {
      console.log('Error: ', e);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);


  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    const getToken = await AsyncStorage.getItem('token');
    if (getToken === null) {
      navigation.navigate('LandingPage');
    }
  };
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profile}>
        <View style={styles.img}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.bgImg}>
            {userData?.avatar ? (
                <Image style={styles.avatar} source={{uri: userData.avatar}} />
              ):null}
            </View>
            <Text style={styles.contentImg}>{userData?.name}</Text>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.contentImg}>{userData?.email}</Text>
            <Text style={styles.contentImg}>{userData?.phone}</Text>
            <View style={styles.preventProfile}>
              <Text style={styles.contentPrevent}>Edit Profile</Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <View style={styles.namecontain}>
              <Image source={require('../../assets/img_profile/balance.png')} />
              <Text style={styles.name}>Balance</Text>
              <Image source={require('../../assets/img_profile/large.png')} />
            </View>
            <View style={styles.namecontain}>
              <Image source={require('../../assets/img_profile/data.png')} />
              <Text style={styles.name}>Sync</Text>
              <Image source={require('../../assets/img_profile/large.png')} />
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <View style={styles.namecontain}>
              <Image
                source={require('../../assets/img_profile/language.png')}
              />
              <Text style={styles.name}>Language</Text>
              <Image source={require('../../assets/img_profile/large.png')} />
            </View>
            <View style={styles.namecontain}>
              <Image source={require('../../assets/img_profile/sync.png')} />
              <Text style={styles.name}>Security</Text>
              <Image source={require('../../assets/img_profile/large.png')} />
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <View style={styles.namecontain}>
              <Image source={require('../../assets/img_profile/any.png')} />
              <Text style={styles.name}>About</Text>
              <Image source={require('../../assets/img_profile/large.png')} />
            </View>
            <View style={styles.namecontain}>
              <Image
                source={require('../../assets/img_profile/feedback.png')}
              />
              <Text style={styles.name}>Feedback</Text>
              <Image source={require('../../assets/img_profile/large.png')} />
            </View>
          </View>
          <View style={styles.line}></View>
          <View>
            <TouchableOpacity style={styles.namecontain} onPress={handleLogout}>
              <Image source={require('../../assets/img_profile/logout.png')} />
              <Text style={styles.name}>Log out</Text>
              <Image source={require('../../assets/img_profile/large.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
  profile: {
    marginHorizontal: 40,
    marginVertical: 20,
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bgImg: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#0D986A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentImg: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  preventProfile: {
    width: 126,
    height: 38,
    backgroundColor: '#0D986A',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentPrevent: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    color: '#000000',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  namecontain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
