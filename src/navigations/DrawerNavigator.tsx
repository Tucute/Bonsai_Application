import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from '../screens/BottomTab/Home';
import HealthMonitor from '../screens/BottomTab/HealthMonitor';
import Nutritional_Summary from '../screens/BottomTab/Nutritional_Summary';
import Recommendations from '../screens/BottomTab/Recommendations';
import MyAccount from '../screens/users/MyAccount';
import BottomTabs from '../screens/BottomTab/BottomTabs';
import WishList from '../screens/users/WishList';
import HeaderOptions from './HeaderOptions';
import PlantStore from '../screens/sellers/PlantStore';
interface OptionsScreenProps{
  drawerIcon: any;
  backgroundColor?: string;
  tintColor?: string;
  size?: number;
}
const DrawerNavigator = () => {
  const navigation = useNavigation();
  const Drawer = createDrawerNavigator();
  const headerOptions = {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      display: 'none',
    },
    headerRight: () => <HeaderOptions navigation={navigation} />
  };
  const optionsScreen = ({
    drawerIcon,
    size = 24,
  }:OptionsScreenProps) => ({
      drawerIcon: ({ color }: { color: string }) => (
        <Image
          source={drawerIcon}
          style={{ width: size, height: size, tintColor: color }}
        />
      ),
      ...headerOptions,
  });
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
           
          })}
        />
        <Drawer.Screen
          name="PlantStore"
          component={PlantStore}
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
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
