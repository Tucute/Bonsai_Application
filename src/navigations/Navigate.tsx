import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingPage from '../screens/LandingPage';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import SuccessSignup from '../screens/SuccessSignup';
import ManagementOrder from '../screens/sellers/products/ManagementOrder';
import BonsaiList from '../screens/sellers/products';
export default function Navigate() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/*<Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SuccessSignup" component={SuccessSignup} />*/}
        {/*<Stack.Screen name="ManagementSale" component={ManagementOrder} />*/}
        <Stack.Screen name="BonsaiList" component={BonsaiList} />
        <Stack.Screen name='ManageBonsai' component={ManagementOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
