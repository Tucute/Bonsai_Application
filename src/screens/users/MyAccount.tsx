import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MyAccount = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profile}>
        <View style={styles.img}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.bgImg}>
              <Image source={require('../../assets/img_profile/people.png')} />
            </View>
            <Text style={styles.contentImg}>DWeber</Text>
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.contentImg}>David Weber</Text>
            <Text style={styles.contentImg}>3 January 1984</Text>
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
            <View style={styles.namecontain}>
              <Image source={require('../../assets/img_profile/logout.png')} />
              <Text style={styles.name}>Log out</Text>
              <Image source={require('../../assets/img_profile/large.png')} />
            </View>
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
});