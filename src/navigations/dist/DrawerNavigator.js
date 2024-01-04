"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var drawer_1 = require("@react-navigation/drawer");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var Home_1 = require("../screens/BottomTab/Home");
var HealthMonitor_1 = require("../screens/BottomTab/HealthMonitor");
var Nutritional_Summary_1 = require("../screens/BottomTab/Nutritional_Summary");
var Plant_Store_1 = require("../screens/BottomTab/Plant_Store");
var Recommendations_1 = require("../screens/BottomTab/Recommendations");
var MyAccount_1 = require("../screens/users/MyAccount");
var BottomTabs_1 = require("../screens/BottomTab/BottomTabs");
var WishList_1 = require("../screens/users/WishList");
var HeaderOptions_1 = require("./HeaderOptions");
var DrawerNavigator = function () {
    var navigation = native_1.useNavigation();
    var Drawer = drawer_1.createDrawerNavigator();
    var headerOptions = {
        headerStyle: {
            backgroundColor: 'white'
        },
        headerTitleStyle: {
            display: 'none'
        },
        headerRight: function () { return react_1["default"].createElement(HeaderOptions_1["default"], { navigation: navigation }); }
    };
    var optionsScreen = function (_a) {
        var drawerIcon = _a.drawerIcon, _b = _a.size, size = _b === void 0 ? 24 : _b;
        return (__assign({ drawerIcon: function (_a) {
                var color = _a.color;
                return (react_1["default"].createElement(react_native_1.Image, { source: drawerIcon, style: { width: size, height: size, tintColor: color } }));
            } }, headerOptions));
    };
    return (react_1["default"].createElement(react_native_gesture_handler_1.GestureHandlerRootView, { style: { flex: 1 } },
        react_1["default"].createElement(Drawer.Navigator, { initialRouteName: "Main" },
            react_1["default"].createElement(Drawer.Screen, { name: "Main", component: BottomTabs_1["default"], options: headerOptions }),
            react_1["default"].createElement(Drawer.Screen, { name: "Home", component: Home_1["default"], options: optionsScreen({
                    drawerIcon: require('../assets/img_bottomTab/Vector.png'),
                    backgroundColor: 'white'
                }) }),
            react_1["default"].createElement(Drawer.Screen, { name: "HealthMonitor", component: HealthMonitor_1["default"], options: optionsScreen({
                    drawerIcon: require('../assets/img_bottomTab/health.png'),
                    backgroundColor: 'white'
                }) }),
            react_1["default"].createElement(Drawer.Screen, { name: "Nutritional_Summary", component: Nutritional_Summary_1["default"], options: optionsScreen({
                    drawerIcon: require('../assets/img_bottomTab/subcription.png'),
                    backgroundColor: 'white'
                }) }),
            react_1["default"].createElement(Drawer.Screen, { name: "Plant_Store", component: Plant_Store_1["default"], options: optionsScreen({
                    drawerIcon: require('../assets/img_bottomTab/Ecommerce.png'),
                    backgroundColor: 'white'
                }) }),
            react_1["default"].createElement(Drawer.Screen, { name: "Recommendations", component: Recommendations_1["default"], options: optionsScreen({
                    drawerIcon: require('../assets/img_bottomTab/Recommendations.png'),
                    backgroundColor: 'white'
                }) }),
            react_1["default"].createElement(Drawer.Screen, { name: "Profile", component: MyAccount_1["default"], options: optionsScreen({
                    drawerIcon: require('../assets/images/Vector.png'),
                    backgroundColor: 'white'
                }) }),
            react_1["default"].createElement(Drawer.Screen, { name: "WishList", component: WishList_1["default"] }))));
};
exports["default"] = DrawerNavigator;
var styles = react_native_1.StyleSheet.create({});
