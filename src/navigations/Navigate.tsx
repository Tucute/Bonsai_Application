import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingPage from '../screens/LandingPage';
import SignUp from '../screens/SignUp';
import SuccessSignup from '../screens/SuccessSignup';
import {Login} from '../screens/Login';
import {useNavigation} from '@react-navigation/native';
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
import WishList from '../screens/users/WishList';
import AntDesign from 'react-native-vector-icons/AntDesign';
import UploadImage from '../screens/users/UploadImage';
interface OptionsScreenProps {
  drawerIcon: any;
  backgroundColor?: string;
  tintColor?: string;
}
function Root() {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();

  const headerOptions = {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitle: (
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
      <View style={{flexDirection: 'row', marginRight: 10, justifyContent:"space-around", width:100}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WishList');
          }}>
          <AntDesign name="hearto" color="black" size= {24}  />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SearchScreen');
          }}>
           <AntDesign name="search1" color="black" size= {24}  />
        </TouchableOpacity>
        <AntDesign name="shoppingcart" color="black" size= {24}  />
      </View>
    ),
  };

  const optionsScreen: React.FC<OptionsScreenProps> = ({
    drawerIcon,
    backgroundColor = 'white',
    tintColor,
  }) => {
    return {
      drawerIcon: ({color, size}: {color: string; size: string}) => (
        <Image
          source={drawerIcon}
          style={{width: size, height: size, tintColor: color}}
        />
      ),
      headerStyle: {
        backgroundColor,
      },
      ...headerOptions,
    };
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen
          name="Main"
          component={BottomTabs}
          options={headerOptions}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={optionsScreen({
            drawerIcon: require('../assets/img_bottomTab/Vector.png'),
            backgroundColor: 'white',
          })}
        />

        <Drawer.Screen
          name="HealthMonitor"
          component={HealthMonitor}
          options={optionsScreen({
            drawerIcon: require('../assets/img_bottomTab/health.png'),
            backgroundColor: 'white',
          })}
        />
        <Drawer.Screen
          name="Nutritional_Summary"
          component={Nutritional_Summary}
          options={optionsScreen({
            drawerIcon: require('../assets/img_bottomTab/subcription.png'),
            backgroundColor: 'white',
            backgroundColor: 'green',
          })}
        />
        <Drawer.Screen
          name="Plant_Store"
          component={Plant_Store}
          options={optionsScreen({
            drawerIcon: require('../assets/img_bottomTab/Ecommerce.png'),
            backgroundColor: 'white',
          })}
        />
        <Drawer.Screen
          name="Recommendations"
          component={Recommendations}
          options={optionsScreen({
            drawerIcon: require('../assets/img_bottomTab/Recommendations.png'),
            backgroundColor: 'white',
          })}
        />
        <Drawer.Screen
          name="Profile"
          component={MyAccount}
          options={optionsScreen({
            drawerIcon: require('../assets/images/Vector.png'),
            backgroundColor: 'white',
          })}
        />
        <Drawer.Screen name="WishList" component={WishList} />
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
          <Stack.Screen
          name="UploadImage"
          component={UploadImage}
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
      </QueryClientProvider>
    </NavigationContainer>
  );
}
