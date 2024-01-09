"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var AntDesign_1 = require("react-native-vector-icons/AntDesign");
var native_1 = require("@react-navigation/native");
var HeaderOptions = function () {
    var navigation = native_1.useNavigation();
    return (react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" } },
        react_1["default"].createElement(react_native_1.Image, { source: require('../assets/img_detail/Header.png'), style: {
                width: 100,
                height: 35,
                alignItems: 'center',
                marginHorizontal: 0
            } }),
        react_1["default"].createElement(react_native_1.View, { style: {
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
                react_1["default"].createElement(AntDesign_1["default"], { name: "shoppingcart", color: "black", size: 24 })))));
};
exports["default"] = HeaderOptions;
