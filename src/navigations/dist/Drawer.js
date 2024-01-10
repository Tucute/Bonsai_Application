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
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
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
var Drawer = function () {
    var navigation = native_1.useNavigation();
    var Drawer = drawer_1.createDrawerNavigator();
    var headerOptions = {
        headerStyle: {
            backgroundColor: 'white'
        },
        headerTitleStyle: {
            display: 'none'
        },
        headerRight: function () { return (react_1["default"].createElement(react_native_1.View, { style: {
                flexDirection: 'row',
                marginRight: 10,
                justifyContent: 'space-around',
                width: 100
            } },
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                    navigation.navigate('WishList');
                } },
                react_1["default"].createElement(AntDesign_1["default"], { name: "hearto", color: "black", size: 24 })),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                    navigation.navigate('SearchScreen');
                } },
                react_1["default"].createElement(AntDesign_1["default"], { name: "search1", color: "black", size: 24 })),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () {
                    navigation.navigate('cart');
                } },
                react_1["default"].createElement(AntDesign_1["default"], { name: "shoppingcart", color: "black", size: 24 })))); }
    };
    var optionsScreen = function (_a) {
        var drawerIcon = _a.drawerIcon, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'white' : _b, tintColor = _a.tintColor;
        return __assign({ drawerIcon: function (_a) {
                var color = _a.color, size = _a.size;
                return (react_1["default"].createElement(react_native_1.Image, { source: drawerIcon, style: { width: size, height: size, tintColor: color } }));
            }, headerStyle: {
                backgroundColor: backgroundColor
            } }, headerOptions);
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
                    backgroundColor: 'white',
                    backgroundColor: 'green'
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
exports["default"] = Drawer;
var styles = react_native_1.StyleSheet.create({});
