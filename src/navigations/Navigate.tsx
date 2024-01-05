import React from 'react';
import DrawerNavigator from './DrawerNavigator';
import HeaderOptions from './HeaderOptions';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingPage from '../screens/LandingPage';
import SignUp from '../screens/SignUp';
import SuccessSignup from '../screens/SuccessSignup';
import {Login} from '../screens/Login';
import Checkout from '../screens/users/Checkout';
import DetailProduct from '../screens/users/DetailProduct';
import Home from '../screens/BottomTab/Home';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SearchScreen from '../screens/users/SearchScreen';
import WishList from '../screens/users/WishList';
import UploadImage from '../screens/users/UploadImage';
import CartScreen from '../screens/users/Cart';
const queryClient = new QueryClient();
export default function Navigate({navigation}:any) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen name="LandingPage" component={LandingPage} options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SuccessSignup" component={SuccessSignup} />
          <Stack.Screen name="HomePage" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="checkout" component={Checkout} />
          <Stack.Screen name="cart" component={CartScreen} />
          <Stack.Screen name="Root"component={DrawerNavigator} options={{headerShown: false}}/>
          <Stack.Screen
            name="DetailProduct"
            component={DetailProduct}
            options={{
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTitleStyle: {
                display: 'none', 
              },
              headerRight: () => <HeaderOptions navigation={navigation} />
            }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTitleStyle: {
                display: 'none', 
              },
              headerRight: () => <HeaderOptions navigation={navigation} />
            }}
          />
          <Stack.Screen
            name="WishList"
            component={WishList}
            options={{
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTitleStyle: {
                display: 'none', 
              },
              headerRight: () => <HeaderOptions navigation={navigation} />
            }}
          />
          <Stack.Screen
            name="UploadImage"
            component={UploadImage}
            options={{
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTitleStyle: {
                display: 'none', 
              },
              headerRight: () => <HeaderOptions navigation={navigation} />
            }}
          />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
