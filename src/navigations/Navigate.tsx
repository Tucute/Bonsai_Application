import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingPage from '../screens/LandingPage';
import SignUp from '../screens/SignUp';
import SuccessSignup from '../screens/SuccessSignup';
import {Login} from '../screens/Login';
import BottomTabs from '../screens/BottomTab/BottomTabs';
import Checkout from '../screens/users/Checkout';
import DetailProduct from '../screens/users/DetailProduct';
import {Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from '../screens/BottomTab/Home';
import HealthMonitor from '../screens/BottomTab/HealthMonitor';
import Nutritional_Summary from '../screens/BottomTab/Nutritional_Summary';
import Plant_Store from '../screens/BottomTab/Plant_Store';
import Recommendations from '../screens/BottomTab/Recommendations';
import MyAccount from '../screens/users/MyAccount';
const Drawer = createDrawerNavigator();
function Root() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen
          name="Main"
          component={BottomTabs}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => (
              <Image
                source={require('../assets/img_detail/Header.png')}
                style={{
                  width: 150,
                  height: 50,
                  alignItems: 'center',
                  marginHorizontal: 40,
                }}
              />
            ),
            headerTitleStyle: {
              display: 'none',
            },
            headerRight: () => (
              <Image
                source={require('../assets/img_detail/Shoppingcart.png')}
                style={{
                  width: 20,
                  height: 18,
                  marginRight: 10,
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({color, size}: any) => (
              <Image
                source={require('../assets/img_bottomTab/Vector.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            ),
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => (
              <Image
                source={require('../assets/img_detail/Header.png')}
                style={{
                  width: 150,
                  height: 50,
                  alignItems: 'center',
                  marginHorizontal: 40,
                }}
              />
            ),
            headerTitleStyle: {
              display: 'none',
            },
            headerRight: () => (
              <Image
                source={require('../assets/img_detail/Shoppingcart.png')}
                style={{
                  width: 20,
                  height: 18,
                  marginRight: 10,
                }}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="HealthMonitor"
          component={HealthMonitor}
          options={{
            drawerIcon: ({color, size}: any) => (
              <Image
                source={require('../assets/img_bottomTab/health.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            ),
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => (
              <Image
                source={require('../assets/img_detail/Header.png')}
                style={{
                  width: 150,
                  height: 50,
                  alignItems: 'center',
                  marginHorizontal: 40,
                }}
              />
            ),
            headerTitleStyle: {
              display: 'none',
            },
            headerRight: () => (
              <Image
                source={require('../assets/img_detail/Shoppingcart.png')}
                style={{
                  width: 20,
                  height: 18,
                  marginRight: 10,
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Nutritional_Summary"
          component={Nutritional_Summary}
          options={{
            drawerIcon: ({color, size}: any) => (
              <Image
                source={require('../assets/img_bottomTab/subcription.png')}
                style={{width: 25, height: 20, tintColor: 'green'}}
              />
            ),
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => (
              <Image
                source={require('../assets/img_detail/Header.png')}
                style={{
                  width: 150,
                  height: 50,
                  alignItems: 'center',
                  marginHorizontal: 40,
                }}
              />
            ),
            headerTitleStyle: {
              display: 'none',
            },
            headerRight: () => (
              <Image
                source={require('../assets/img_detail/Shoppingcart.png')}
                style={{
                  width: 20,
                  height: 18,
                  marginRight: 10,
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Plant_Store"
          component={Plant_Store}
          options={{
            drawerIcon: ({color, size}: any) => (
              <Image
                source={require('../assets/img_bottomTab/Ecommerce.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            ),
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => (
              <Image
                source={require('../assets/img_detail/Header.png')}
                style={{
                  width: 150,
                  height: 50,
                  alignItems: 'center',
                  marginHorizontal: 40,
                }}
              />
            ),
            headerTitleStyle: {
              display: 'none',
            },
            headerRight: () => (
              <Image
                source={require('../assets/img_detail/Shoppingcart.png')}
                style={{
                  width: 20,
                  height: 18,
                  marginRight: 10,
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Recommendations"
          component={Recommendations}
          options={{
            drawerIcon: ({color, size}: any) => (
              <Image
                source={require('../assets/img_bottomTab/Recommendations.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            ),
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => (
              <Image
                source={require('../assets/img_detail/Header.png')}
                style={{
                  width: 150,
                  height: 50,
                  alignItems: 'center',
                  marginHorizontal: 40,
                }}
              />
            ),
            headerTitleStyle: {
              display: 'none',
            },
            headerRight: () => (
              <Image
                source={require('../assets/img_detail/Shoppingcart.png')}
                style={{
                  width: 20,
                  height: 18,
                  marginRight: 10,
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={MyAccount}
          options={{
            drawerIcon: ({color, size}: any) => (
              <Image
                source={require('../assets/images/Vector.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            ),
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => (
              <Image
                source={require('../assets/img_detail/Header.png')}
                style={{
                  width: 150,
                  height: 50,
                  alignItems: 'center',
                  marginHorizontal: 40,
                }}
              />
            ),
            headerTitleStyle: {
              display: 'none',
            },
            headerRight: () => (
              <Image
                source={require('../assets/img_detail/Shoppingcart.png')}
                style={{
                  width: 20,
                  height: 18,
                  marginRight: 10,
                }}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </GestureHandlerRootView>
  );
}
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
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => (
              <Image
                source={require('../assets/img_detail/Header.png')}
                style={{
                  width: 150,
                  height: 50,
                  alignItems: 'center',
                  marginHorizontal: 40,
                }}
              />
            ),
            headerTitleStyle: {
              display: 'none', // Ẩn tiêu đề của màn hình
            },
            headerRight: () => (
              <Image
                source={require('../assets/img_detail/Shoppingcart.png')}
                style={{
                  width: 20,
                  height: 18,
                  marginRight: 10,
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
