import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
// import LandingPage from '../screens/LandingPage';
// import SignIn from '../screens/SignIn';
// import SignUp from '../screens/SignUp';
// import SuccessSignup from '../screens/SuccessSignup';
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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchScreen from '../screens/users/SearchScreen';
import WishList from '../screens/BottomTab/WishList';

const Drawer = createDrawerNavigator();
function Root() {
  const navigation = useNavigation();
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
              <View style={{flexDirection: 'row', marginRight: 10}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SearchScreen');
                  }}>
                  <Image
                    source={require('../assets/img_detail/search.png')}
                    style={{
                      width: 20,
                      height: 18,
                      marginRight: 10,
                      marginHorizontal: 20,
                    }}
                  />
                </TouchableOpacity>
                <Image
                  source={require('../assets/img_detail/Shoppingcart.png')}
                  style={{
                    width: 20,
                    height: 18,
                    marginRight: 10,
                  }}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({color, size}) => (
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
            drawerIcon: ({color, size}) => (
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
            drawerIcon: ({color, size}) => (
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
            drawerIcon: ({color, size}) => (
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
            drawerIcon: ({color, size}) => (
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
            drawerIcon: ({color, size}) => (
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
const queryClient = new QueryClient();

export default function Navigate() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
      <Stack.Navigator>
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

        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
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
        <Stack.Screen
          name="WishList"
          component={WishList}
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

        {/* <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SuccessSignup" component={SuccessSignup} /> */}
        <Stack.Screen name="checkout" component={Checkout} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
