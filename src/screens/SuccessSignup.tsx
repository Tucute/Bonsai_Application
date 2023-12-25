import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import React from 'react';

export default function SuccessSignup({navigation}: any) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require('../assets/images/headerImage.jpg')}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.contentLogin}>
          <View style={styles.itemLogo}>
            <Image
              source={require('../assets/images/logo-bonsai-cay-canh-28-1030x1030-removebg-preview.png')}
              style={styles.logo}
            />
            <Text style={styles.textLogo}>BonSai - provip</Text>
          </View>
          <View style={styles.textInput}>
            <TextInput
              style={styles.input}
              placeholder="Enter E-mail"
              placeholderTextColor={'black'}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor={'black'}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
            />
          </View>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.textLgoin}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.signupNav}>
            <Text style={styles.textAccount}>Already have you an account?</Text>
            <Text
              style={styles.textSignup}
              onPress={() => navigation.navigate('SignIn')}>
              Login
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
  },
  itemLogo: {
    alignItems: 'center',
    marginTop: -30,
  },
  textLogo: {
    color: '#98C13F',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -30,
  },
  textWelcome: {
    color: '#000',
    fontSize: 36,
    fontWeight: 'bold',
  },
  textLogin: {
    color: '#000',
    fontSize: 14,
  },
  contentLogin: {
    paddingHorizontal: 38,
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1.221,
    borderBottomColor: '#063',
    color: '#000',
  },
  textInput: {
    gap: 22,
    marginTop: 20,
  },
  forgetPass: {
    color: '#0D986A',
    fontSize: 14,
  },
  buttonLogin: {
    backgroundColor: '#0D986A',
    height: 55,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15,
    marginHorizontal: 30,
  },
  textLgoin: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
  },
  signupNav: {
    flexDirection: 'row',
    textAlign: 'center',
    paddingLeft: 40,
    marginTop: 10,
  },
  textAccount: {
    color: '#000',
    fontSize: 14,
  },
  textSignup: {
    color: '#0D986A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    top: 0,
    left: 0,
    width: '100%',
    height: '80%',
    borderBottomLeftRadius: 180,
    borderBottomRightRadius: 180,
  },
});
