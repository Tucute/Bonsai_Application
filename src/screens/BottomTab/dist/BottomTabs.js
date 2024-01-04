"use strict";
exports.__esModule = true;
var react_1 = require("react");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var react_native_1 = require("react-native");
var Home_1 = require("./Home");
var HealthMonitor_1 = require("./HealthMonitor");
var Nutritional_Summary_1 = require("./Nutritional_Summary");
var Plant_Store_1 = require("./Plant_Store");
var Recommendations_1 = require("./Recommendations");
var Tab = bottom_tabs_1.createBottomTabNavigator();
var generateTabBarButtonStyle = function (focused) { return ({
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: focused ? '#0D986A' : 'white',
    borderRadius: 15
}); };
var generateTabBarIconStyle = function (focused) { return ({
    width: 30,
    height: 30,
    padding: 10,
    tintColor: focused ? 'white' : 'gray'
}); };
var BottomTabs = function () {
    return (react_1["default"].createElement(Tab.Navigator, { initialRouteName: "Home", screenOptions: {
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
                    height: 3
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65
            },
            headerStyle: {
                backgroundColor: 'white'
            },
            headerTitleStyle: {
                paddingHorizontal: '40%'
            }
        }, style: { position: 'absolute', backgroundColor: 'black' } },
        react_1["default"].createElement(Tab.Screen, { name: "Home", component: Home_1["default"], options: {
                tabBarIcon: function (_a) {
                    var focused = _a.focused;
                    return (react_1["default"].createElement(react_native_1.View, { style: generateTabBarButtonStyle(focused) },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_bottomTab/Vector.png'), style: generateTabBarIconStyle(focused) })));
                }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "HealthMonitor", component: HealthMonitor_1["default"], options: {
                tabBarIcon: function (_a) {
                    var focused = _a.focused;
                    return (react_1["default"].createElement(react_native_1.View, { style: generateTabBarButtonStyle(focused) },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_bottomTab/health.png'), style: generateTabBarIconStyle(focused) })));
                }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Nutritional_Summary", component: Nutritional_Summary_1["default"], options: {
                tabBarIcon: function (_a) {
                    var focused = _a.focused;
                    return (react_1["default"].createElement(react_native_1.View, { style: generateTabBarButtonStyle(focused) },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_bottomTab/subcription.png'), style: {
                                width: 40,
                                height: 30,
                                tintColor: focused ? 'white' : '#F0D64D'
                            } })));
                }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Plant_Store", component: Plant_Store_1["default"], options: {
                tabBarIcon: function (_a) {
                    var focused = _a.focused;
                    return (react_1["default"].createElement(react_native_1.View, { style: generateTabBarButtonStyle(focused) },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_bottomTab/Ecommerce.png'), style: generateTabBarIconStyle(focused) })));
                }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Recommendations", component: Recommendations_1["default"], options: {
                tabBarIcon: function (_a) {
                    var focused = _a.focused;
                    return (react_1["default"].createElement(react_native_1.View, { style: generateTabBarButtonStyle(focused) },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_bottomTab/Recommendations.png'), style: generateTabBarIconStyle(focused) })));
                }
            } })));
};
exports["default"] = BottomTabs;
var styles = react_native_1.StyleSheet.create({});
