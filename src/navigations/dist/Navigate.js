"use strict";
exports.__esModule = true;
var react_1 = require("react");
var DrawerNavigator_1 = require("./DrawerNavigator");
var HeaderOptions_1 = require("./HeaderOptions");
var stack_1 = require("@react-navigation/stack");
var native_1 = require("@react-navigation/native");
var LandingPage_1 = require("../screens/LandingPage");
var SignUp_1 = require("../screens/SignUp");
var SuccessSignup_1 = require("../screens/SuccessSignup");
var Login_1 = require("../screens/Login");
var Checkout_1 = require("../screens/users/Checkout");
var DetailProduct_1 = require("../screens/users/DetailProduct");
var Home_1 = require("../screens/BottomTab/Home");
var react_query_1 = require("@tanstack/react-query");
var SearchScreen_1 = require("../screens/users/SearchScreen");
var WishList_1 = require("../screens/users/WishList");
var UploadImage_1 = require("../screens/users/UploadImage");
var Cart_1 = require("../screens/users/Cart");
var Chat_1 = require("../screens/users/Chat");
var MapComponent_1 = require("../screens/users/MapComponent");
var queryClient = new react_query_1.QueryClient();
function Navigate(_a) {
    var navigation = _a.navigation;
    var Stack = stack_1.createStackNavigator();
    return (react_1["default"].createElement(native_1.NavigationContainer, null,
        react_1["default"].createElement(react_query_1.QueryClientProvider, { client: queryClient },
            react_1["default"].createElement(Stack.Navigator, { screenOptions: { headerShown: true } },
                react_1["default"].createElement(Stack.Screen, { name: "LandingPage", component: LandingPage_1["default"], options: { headerShown: false } }),
                react_1["default"].createElement(Stack.Screen, { name: "SignUp", component: SignUp_1["default"] }),
                react_1["default"].createElement(Stack.Screen, { name: "SuccessSignup", component: SuccessSignup_1["default"] }),
                react_1["default"].createElement(Stack.Screen, { name: "HomePage", component: Home_1["default"] }),
                react_1["default"].createElement(Stack.Screen, { name: "Login", component: Login_1.Login }),
                react_1["default"].createElement(Stack.Screen, { name: "checkout", component: Checkout_1["default"] }),
                react_1["default"].createElement(Stack.Screen, { name: "cart", component: Cart_1["default"] }),
                react_1["default"].createElement(Stack.Screen, { name: "Root", component: DrawerNavigator_1["default"], options: { headerShown: false } }),
                react_1["default"].createElement(Stack.Screen, { name: "DetailProduct", component: DetailProduct_1["default"], options: {
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        headerTitleStyle: {
                            display: 'none'
                        },
                        headerRight: function () { return react_1["default"].createElement(HeaderOptions_1["default"], { navigation: navigation }); }
                    } }),
                react_1["default"].createElement(Stack.Screen, { name: "SearchScreen", component: SearchScreen_1["default"], options: {
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        headerTitleStyle: {
                            display: 'none'
                        },
                        headerRight: function () { return react_1["default"].createElement(HeaderOptions_1["default"], { navigation: navigation }); }
                    } }),
                react_1["default"].createElement(Stack.Screen, { name: "WishList", component: WishList_1["default"], options: {
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        headerTitleStyle: {
                            display: 'none'
                        },
                        headerRight: function () { return react_1["default"].createElement(HeaderOptions_1["default"], { navigation: navigation }); }
                    } }),
                react_1["default"].createElement(Stack.Screen, { name: "UploadImage", component: UploadImage_1["default"], options: {
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        headerTitleStyle: {
                            display: 'none'
                        },
                        headerRight: function () { return react_1["default"].createElement(HeaderOptions_1["default"], { navigation: navigation }); }
                    } }),
                react_1["default"].createElement(Stack.Screen, { name: "Chat", component: Chat_1["default"], options: {
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        headerTitleStyle: {
                            display: 'none'
                        },
                        headerRight: function () { return react_1["default"].createElement(HeaderOptions_1["default"], { navigation: navigation }); }
                    } }),
                react_1["default"].createElement(Stack.Screen, { name: "MapComponent", component: MapComponent_1["default"], options: {
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: 'white'
                        },
                        headerTitleStyle: {
                            display: 'none'
                        },
                        headerRight: function () { return react_1["default"].createElement(HeaderOptions_1["default"], { navigation: navigation }); }
                    } })))));
}
exports["default"] = Navigate;
