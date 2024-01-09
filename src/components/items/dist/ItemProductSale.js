"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var axios_1 = require("axios");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var react_1 = require("react");
var useFetchInfoTrees_1 = require("../../hooks/useFetchInfoTrees");
var useAddWishlist_1 = require("../../hooks/useAddWishlist");
var native_1 = require("@react-navigation/native");
var ItemProductPopular = function () {
    var navigation = native_1.useNavigation();
    var carouselData = useFetchInfoTrees_1["default"]();
    var _a = react_1.useState([]), wishlist = _a[0], setWishlist = _a[1];
    var addToWishlist = function (userId, product) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            useAddWishlist_1["default"](userId, product, wishlist, setWishlist);
            return [2 /*return*/];
        });
    }); };
    react_1.useEffect(function () {
        var fetchWishlist = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response, userWishlist, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get("https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist?userId=" + (userData === null || userData === void 0 ? void 0 : userData.id))];
                    case 1:
                        response = _a.sent();
                        if (response.data.length > 0) {
                            userWishlist = response.data;
                            setWishlist(userWishlist);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error fetching wishlist:', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchWishlist();
    }, []);
    var _b = react_1.useState(), userData = _b[0], setUserData = _b[1];
    var getUserData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var jsonValue, value, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, async_storage_1["default"].getItem('user')];
                case 1:
                    jsonValue = _a.sent();
                    value = jsonValue != null ? JSON.parse(jsonValue) : null;
                    setUserData(value);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log('Error: ', e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        getUserData();
    }, []);
    return (react_1["default"].createElement(react_native_1.FlatList, { data: carouselData, renderItem: function (_a) {
            var item = _a.item;
            return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.popularTree, onPress: function () { return navigation.navigate('DetailProduct', { product: item }); } },
                react_1["default"].createElement(react_native_1.ImageBackground, { source: { uri: item.image }, style: styles.popularImg },
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.tym, onPress: function () { return addToWishlist(userData === null || userData === void 0 ? void 0 : userData.id, item); } },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_recommendations/tym.png'), style: [styles.imgtym, wishlist.some(function (wishlistItem) { return wishlistItem.item_id === item.id; })
                                    ? styles.imgtymActive
                                    : null,] }))),
                react_1["default"].createElement(react_native_1.View, { style: styles.infotree },
                    react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nametree }, item.name),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.slogan }, "Monstera family")),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.prices },
                        item.promotion_price === item.price
                            ? "$" + item.price
                            : "$" + item.promotion_price,
                        item.promotion_price !== item.price && (react_1["default"].createElement(react_native_1.Text, { style: styles.originalPrice },
                            "$",
                            item.price)))),
                react_1["default"].createElement(react_native_1.View, { style: styles.plus },
                    react_1["default"].createElement(react_native_1.View, { style: styles.imgPlus },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_popular/plus.png'), style: styles.plusImg })))));
        } }));
};
exports["default"] = ItemProductPopular;
var styles = react_native_1.StyleSheet.create({
    imgtymActive: {
        tintColor: 'green'
    },
    popularTree: {
        width: '100%',
        height: 100,
        backgroundColor: '#DCE8D6',
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    popularImg: {
        width: 100,
        height: 'auto',
        borderRadius: 10
    },
    nametree: {
        fontSize: 14,
        color: '#002140',
        fontWeight: 'bold',
        width: 120,
        flexDirection: 'row'
    },
    slogan: {
        color: '#002140',
        fontSize: 12
    },
    prices: {
        color: '#002140',
        fontSize: 12
    },
    infotree: {
        justifyContent: 'space-around',
        marginHorizontal: 10
    },
    imgPlus: {
        backgroundColor: '#C3DCB7',
        width: 50,
        height: 50,
        borderRadius: 500,
        alignItems: 'center',
        justifyContent: 'center'
    },
    plus: {
        marginLeft: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusImg: {
        width: 20,
        height: 20
    },
    originalPrice: {
        textDecorationLine: 'line-through',
        color: 'red'
    },
    tym: {
        width: 24,
        height: 24,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '70%',
        marginTop: '70%'
    },
    imgtym: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
