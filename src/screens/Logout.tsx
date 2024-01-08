import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Logout({navigation}: any) {
  const handleLogout = async () => {
    console.log('Before removing token');
    await AsyncStorage.removeItem('token');
    console.log('After removing token');
    const getToken = await AsyncStorage.getItem('token');
    console.log('Token after removal:', getToken);
    if (getToken === null) {
      console.log('Navigating to SignUp');
      navigation.navigate('SignUp');
    }
  };
  return (
    <TouchableOpacity onPress={handleLogout}>
      <Text style={{fontSize: 30, color: 'black'}}>Logout</Text>
    </TouchableOpacity>
  );
}
