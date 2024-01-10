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
var react_1 = require("react");
var react_native_1 = require("react-native");
var styleCheckout_1 = require("../../styles/styleCheckout");
var react_2 = require("react");
var ItemProductCheckout_1 = require("../../components/items/ItemProductCheckout");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var viewHeader = function () {
    var _a = react_2.useState(), userData = _a[0], setUserData = _a[1];
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
    react_2.useEffect(function () {
        getUserData();
    }, []);
    return (react_1["default"].createElement(react_native_1.View, { style: styleCheckout_1.styles.viewAddress },
        react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.nameUser }, userData === null || userData === void 0 ? void 0 : userData.name),
        react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.phoneUser },
            "(+84) ", userData === null || userData === void 0 ? void 0 :
            userData.phone),
        react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.AddressUser }, userData === null || userData === void 0 ? void 0 : userData.address)));
};
var viewFooter = function (cartItems, totalPrice, discount) {
    var _a = react_2.useState(0), price = _a[0], setPrice = _a[1];
    react_2.useEffect(function () {
        var handleTotalPrice = function () {
            var price = cartItems.reduce(function (acc, item) { return acc + item.price * item.quantity; }, 0);
            if (price > 50) {
                setPrice(price);
            }
            else {
                setPrice(price);
            }
        };
        handleTotalPrice();
    }, [cartItems, discount]);
    return (react_1["default"].createElement(react_native_1.View, null,
        react_1["default"].createElement(react_native_1.View, { style: styleCheckout_1.styles.sumarizeOrder },
            react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.titleOrder }, "T\u00F3m t\u1EAFt \u0111\u01A1n h\u00E0ng"),
            react_1["default"].createElement(react_native_1.View, { style: styleCheckout_1.styles.listInfo },
                react_1["default"].createElement(react_native_1.Text, null, "T\u1ED5ng ph\u1EE5"),
                react_1["default"].createElement(react_native_1.Text, null,
                    "$",
                    price)),
            react_1["default"].createElement(react_native_1.View, { style: styleCheckout_1.styles.listInfo },
                react_1["default"].createElement(react_native_1.Text, null, "V\u1EADn chuy\u1EC3n"),
                react_1["default"].createElement(react_native_1.Text, null, "Free Shipping")),
            react_1["default"].createElement(react_native_1.View, { style: styleCheckout_1.styles.listInfo },
                react_1["default"].createElement(react_native_1.Text, null, "Shipping discount"),
                react_1["default"].createElement(react_native_1.Text, null,
                    "-",
                    discount,
                    "%")),
            react_1["default"].createElement(react_native_1.View, { style: styleCheckout_1.styles.listInfo },
                react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.total }, "T\u1ED5ng"),
                react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.total },
                    "$",
                    totalPrice))),
        react_1["default"].createElement(react_native_1.View, { style: styleCheckout_1.styles.viewPayment },
            react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.titleOrder }, "Ph\u01B0\u01A1ng th\u1EE9c thanh to\u00E1n"),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styleCheckout_1.styles.cash },
                react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.viewCOD }, "COD"),
                react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.textPayment }, "Thanh to\u00E1n khi nh\u1EADn h\u00E0ng")),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styleCheckout_1.styles.viewVNpay },
                react_1["default"].createElement(react_native_1.Image, { style: styleCheckout_1.styles.VNpay, source: {
                        uri: 'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png'
                    } }),
                react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.textVNpay }, "V\u00ED \u0111i\u1EC7n t\u1EED VNPAY"))),
        react_1["default"].createElement(react_native_1.View, { style: styleCheckout_1.styles.viewTotalOrder },
            react_1["default"].createElement(react_native_1.View, { style: styleCheckout_1.styles.totalOrder },
                react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.textTotalPrice }, "T\u1ED5ng (1 m\u1EB7t h\u00E0ng)"),
                react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.textTotalPrice },
                    "$",
                    totalPrice)),
            react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.textSave },
                "B\u1EA1n \u0111\u00E3 ti\u1EBFt ki\u1EC7m \u0111\u01B0\u1EE3c $",
                price - totalPrice),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styleCheckout_1.styles.btnOrder },
                react_1["default"].createElement(react_native_1.Text, { style: styleCheckout_1.styles.textOrder }, "\u0110\u1EB6T H\u00C0NG")))));
};
var Checkout = function (_a) {
    var route = _a.route;
    var _b = route.params, cartItems = _b.cartItems, totalPrice = _b.totalPrice, discount = _b.discount;
    return (react_1["default"].createElement(react_native_1.View, { style: styleCheckout_1.styles.container },
        react_1["default"].createElement(react_native_1.FlatList, { data: cartItems, keyExtractor: function (index) { return index.id.toString(); }, renderItem: function (_a) {
                var item = _a.item;
                return react_1["default"].createElement(ItemProductCheckout_1["default"], { item: item });
            }, ListHeaderComponent: viewHeader, ListFooterComponent: viewFooter(cartItems, totalPrice, discount) })));
};
exports["default"] = Checkout;
