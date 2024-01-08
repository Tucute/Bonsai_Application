import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Home from './Home';
import HealthMonitor from './HealthMonitor';
import Nutritional_Summary from './Nutritional_Summary';
import Plant_Store from './Plant_Store';
import Recommendations from './Recommendations';
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
        headerShown: false,
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
      style={{position: 'absolute', backgroundColor: 'black'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
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
        name="HealthMonitor"
        component={HealthMonitor}
        options={{
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
        name="Nutritional_Summary"
        component={Nutritional_Summary}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={generateTabBarButtonStyle(focused)}>
              <Image
                source={require('../../assets/img_bottomTab/subcription.png')}
                style={{
                  width: 40,
                  height: 30,
                  tintColor: focused ? 'white' : '#F0D64D',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Plant_Store"
        component={Plant_Store}
        options={{
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
        name="Recommendations"
        component={Recommendations}
        options={{
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

const styles = StyleSheet.create({});