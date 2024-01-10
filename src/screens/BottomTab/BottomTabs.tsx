import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Image} from 'react-native';
import Home from './Home';
import HealthMonitor from './HealthMonitor';
import Nutritional_Summary from './Nutritional_Summary';
import Recommendations from './Recommendations';
import PlantStore from '../sellers/PlantStore';

const Tab = createBottomTabNavigator();
const URL_IMAGE = '../../assets/img_bottomTab/';

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, size}) => {
          let rn = route.name;
          let imageSource;

          if (rn === 'Home') {
            imageSource = require(`${URL_IMAGE}/Vector.png`);
          } else if (rn === 'HealthMonitor') {
            imageSource = require(`${URL_IMAGE}/health.png`);
          } else if (rn === 'Nutritional_Summary') {
            imageSource = require(`${URL_IMAGE}/subcription.png`);
          } else if (rn === 'PlantStore') {
            imageSource = require(`${URL_IMAGE}/Ecommerce.png`);
          } else if (rn === 'Recommendations') {
            imageSource = require(`${URL_IMAGE}/Recommendations.png`);
          }

          return (
            <View style={focused ? styles.focusedStyle : null}>
              <Image
                source={imageSource}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#0D986A' : 'grey',
                }}
              />
            </View>
          );
        },
        tabBarLabel: () => {
          return null;
        },
        tabBarStyle: {
          height: 62,
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="HealthMonitor" component={HealthMonitor} options={{headerShown: false}}/>
      <Tab.Screen name="Nutritional_Summary" component={Nutritional_Summary} options={{headerShown: false}}/>
      <Tab.Screen name="PlantStore" component={PlantStore} options={{headerShown: false}}/>
      <Tab.Screen name="Recommendations" component={Recommendations} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  focusedStyle: {
    backgroundColor: 'rgba(13, 152, 106, 0.1)',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 44,
  },
});
