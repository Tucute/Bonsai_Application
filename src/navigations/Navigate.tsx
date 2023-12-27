import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingPage from '../screens/LandingPage';
import SignUp from '../screens/SignUp';
import SuccessSignup from '../screens/SuccessSignup';
import Home from '../screens/users/Home';
import {Login} from '../screens/Login';
export default function Navigate() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SuccessSignup" component={SuccessSignup} />
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
