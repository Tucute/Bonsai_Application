import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Image} from 'react-native';
import Home from './Home';
import HealthTab from './HealthTab';
import NotificationTab from './NotificationTab';
import SettingTab from './SettingTab';
import CartScreen from '../users/Cart';

const Tab = createBottomTabNavigator();

const generateTabBarButtonStyle = (focused: boolean) => ({
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: focused ? '#0D986A' : 'white',
  borderRadius: 15,
});

const generateTabBarIconStyle = (focused: boolean) => ({
  width: 30,
  height: 30,
  padding: 10,
  tintColor: focused ? 'white' : 'gray',
});

const BottomTabs: () => React.JSX.Element = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 7,
          height: 60,
          backgroundColor: '#fff',

          shadowColor: '#000',
          shadowOffset: {
            width: 3,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          paddingHorizontal: '40%',
        },
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{position: 'absolute', backgroundColor: 'black'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View style={generateTabBarButtonStyle(focused)}>
              <Image
                source={require('../../assets/img_bottomTab/Vector.png')}
                style={generateTabBarIconStyle(focused)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Health"
        component={HealthTab}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View style={generateTabBarButtonStyle(focused)}>
              <Image
                source={require('../../assets/img_bottomTab/health.png')}
                style={generateTabBarIconStyle(focused)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationTab}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View style={generateTabBarButtonStyle(focused)}>
              <Image
                source={require('../../assets/img_bottomTab/subcription.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 40,
                  height: 30,
                  tintColor: focused ? 'white' : 'yellow',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View style={generateTabBarButtonStyle(focused)}>
              <Image
                source={require('../../assets/img_bottomTab/Ecommerce.png')}
                style={generateTabBarIconStyle(focused)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingTab}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View style={generateTabBarButtonStyle(focused)}>
              <Image
                source={require('../../assets/img_bottomTab/Recommendations.png')}
                style={generateTabBarIconStyle(focused)}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});
