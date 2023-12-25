import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
export default function LandingPage({navigation}: any) {
  return (
    <ImageBackground
      source={require('../assets/images/Landing.png')}
      resizeMode="cover"
      style={styles.image}>
      <Text style={styles.title}>BonSai Application</Text>
      <Text style={styles.text}>Farm at your fingertips</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonStart}>Get Started </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 170,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  buttonStart: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '600',
  },
  button: {
    marginTop: '75%',
    backgroundColor: '#D9D9D9',
    height: 50,
    padding: 8,
    marginHorizontal: 100,
    borderRadius: 12,
    opacity: 0.5,
  },
});
