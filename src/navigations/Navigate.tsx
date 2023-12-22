import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import LandingPage from '../screens/LandingPage';
// import SignIn from '../screens/SignIn';
// import SignUp from '../screens/SignUp';
// import SuccessSignup from '../screens/SuccessSignup';
import BottomTabs from '../screens/BottomTab/BottomTabs';
import DetailProduct from '../screens/users/DetailProduct';
import {Image} from 'react-native';
// import Home from '../screens/BottomTab/Home';
export default function Navigate() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomTabs"
          component={BottomTabs}></Stack.Screen>
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

        {/* <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SuccessSignup" component={SuccessSignup} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
