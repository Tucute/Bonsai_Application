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
var react_1 = require("react");
var useAddWishlist_1 = require("../../hooks/useAddWishlist");
var AddToCartButton_1 = require("../../components/buttons/AddToCartButton");
var DetailProduct = function (_a) {
    var route = _a.route;
    var product = route.params.product;
    var _b = react_1.useState([]), wishlist = _b[0], setWishlist = _b[1];
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
                        return [4 /*yield*/, axios_1["default"].get('https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist?user_id=20')];
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
    }, [setWishlist]);
    return (react_1["default"].createElement(react_native_1.ScrollView, { style: styles.DetailContainer },
        react_1["default"].createElement(react_native_1.View, { style: styles.InfoDetail },
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.View, { style: styles.contextDetail },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.indoor }, "Indoor"),
                    react_1["default"].createElement(react_native_1.View, { style: styles.contentIndoor },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_detail/Star.png') }),
                        react_1["default"].createElement(react_native_1.Text, null, "4.8"))),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.infoIndoor }, product.name))),
            react_1["default"].createElement(react_native_1.View, { style: styles.decorIndoor },
                react_1["default"].createElement(react_native_1.View, { style: { marginVertical: 10 } },
                    react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.Text, { style: styles.priceIndoor }, "PRICE"),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.numberIndoor }, "$ 14")),
                    react_1["default"].createElement(react_native_1.View, { style: { marginVertical: 20 } },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.priceIndoor }, "SIZE"),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.numberIndoor }, "5' h")),
                    react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.imgHeat, onPress: function () { return addToWishlist(20, product); } },
                            react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_recommendations/tym.png'), style: [wishlist.some(function (wishlistItem) { return wishlistItem.item_id === product.id; })
                                        ? styles.imgtymActive
                                        : null] })))),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.Image, { source: typeof product.image === 'number'
                            ? product.image
                            : { uri: product.image }, style: styles.SizeImg })))),
        react_1["default"].createElement(react_native_1.View, { style: styles.temperature },
            react_1["default"].createElement(react_native_1.View, { style: styles.overViewContain },
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameOverview }, "Overview"),
                react_1["default"].createElement(react_native_1.View, { style: styles.temparature },
                    react_1["default"].createElement(react_native_1.View, { style: styles.lightcontain },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_detail/light.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nametemp }, "LIGHT"),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.measure }, "35-40%")),
                    react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_detail/khogkhi.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nametemp }, "TEMPERATURE"),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.measure }, "70-75 F")),
                    react_1["default"].createElement(react_native_1.View, null,
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_detail/water.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.nametemp }, "WATER"),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.measure }, "250ml")))),
            react_1["default"].createElement(react_native_1.View, { style: styles.aboutContain },
                react_1["default"].createElement(react_native_1.Text, { style: styles.nameAbout }, "About"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.description }, product.description)),
            react_1["default"].createElement(react_native_1.View, { style: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 10
                } },
                react_1["default"].createElement(AddToCartButton_1["default"], { item: product })))));
};
exports["default"] = DetailProduct;
var styles = react_native_1.StyleSheet.create({
    DetailContainer: {
        flex: 1
    },
    InfoDetail: {
        width: '100%',
        backgroundColor: '#DEEAD8',
        borderBottomLeftRadius: 41,
        flex: 2
    },
    temperature: {
        width: '100%',
        borderBottomLeftRadius: 41,
        flex: 2
    },
    contextDetail: {
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    indoor: {
        fontSize: 14,
        color: '#435B71'
    },
    contentIndoor: {
        width: 56,
        height: 21,
        backgroundColor: '#0D986A',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    infoIndoor: {
        fontSize: 35,
        fontWeight: 'bold',
        width: 177,
        color: '#435B71',
        marginHorizontal: 20
    },
    decorIndoor: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceIndoor: {
        fontSize: 12,
        color: '#435B71'
    },
    numberIndoor: {
        fontSize: 17,
        color: '#002140'
    },
    imgHeat: {
        backgroundColor: 'white',
        width: 42,
        height: 42,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    SizeImg: {
        width: 152,
        height: 160,
        borderRadius: 10
    },
    overViewContain: {
        marginHorizontal: 20,
        marginTop: 15
    },
    nameOverview: {
        fontSize: 16,
        color: '#002140'
    },
    temparature: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20
    },
    lightcontain: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    nametemp: {
        fontSize: 9,
        color: '#435B71'
    },
    measure: {
        color: '#0D986A',
        fontSize: 13
    },
    aboutContain: {
        marginHorizontal: 20
    },
    nameAbout: { fontSize: 16, color: '#002140' },
    description: {
        fontSize: 11,
        color: '#002140',
        marginVertical: 10
    },
    containerAddtocart: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    addtocart: {
        width: '90%',
        height: 48,
        backgroundColor: '#0D986A',
        borderRadius: 50,
        justifyContent: 'center',
        marginTop: 40
    },
    addtocarts: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    imgCart: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 100
    },
    nameAddcart: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'white'
    },
    priceAddcart: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    imgtymActive: {
        tintColor: 'green'
    }
});
