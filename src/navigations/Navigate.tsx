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
//import ManagementOrder from '../screens/sellers/products/ManagementOrder';
import BonsaiList from '../screens/sellers/products';
import ManagementOrder from '../screens/sellers/ManagementOrder';
import Chat from '../screens/users/Chat';
import MapComponent from '../screens/users/MapComponent';
import ManagementYourOrder from '../screens/sellers/ManagementYourOrder';
import StatusOrder from '../screens/sellers/products/StatusOrder';
import ManagementBonsai from '../screens/sellers/products/ManagementBonsai';

const queryClient = new QueryClient();
export default function Navigate({navigation}: any) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator >
        
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{headerShown: false}}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SuccessSignup" component={SuccessSignup} />
          <Stack.Screen name="HomePage" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="checkout" component={Checkout} />
          <Stack.Screen name="cart" component={CartScreen} />
          <Stack.Screen name="Order" component={ManagementOrder} />
          <Stack.Screen name="Your Order" component={ManagementYourOrder} />
          <Stack.Screen name="chat" component={Chat} />
          <Stack.Screen
            name="Root"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="ManagementBonsai" component={ManagementBonsai} />
          <Stack.Screen name="BonsaiList" component={BonsaiList} />
          <Stack.Screen name="ManagementOrder" component={ManagementOrder} />
          <Stack.Screen name="StatusOrder" component={StatusOrder} />

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
              headerRight: () => <HeaderOptions navigation={navigation} />,
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
              headerRight: () => <HeaderOptions navigation={navigation} />,
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
              headerRight: () => <HeaderOptions navigation={navigation} />,
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
              headerRight: () => <HeaderOptions navigation={navigation} />,
            }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTitleStyle: {
                display: 'none',
              },
              headerRight: () => <HeaderOptions navigation={navigation} />,
            }}
          />
          <Stack.Screen
            name="MapComponent"
            component={MapComponent}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: 'white',
              },
              headerTitleStyle: {
                display: 'none',
              },
              headerRight: () => <HeaderOptions navigation={navigation} />,
            }}
          />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
