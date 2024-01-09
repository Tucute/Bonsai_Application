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
var react_1 = require("react");
var async_storage_1 = require("@react-native-async-storage/async-storage");
var MyAccount = function (_a) {
    var navigation = _a.navigation;
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
    var handleLogout = function () { return __awaiter(void 0, void 0, void 0, function () {
        var getToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, async_storage_1["default"].removeItem('token')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, async_storage_1["default"].getItem('token')];
                case 2:
                    getToken = _a.sent();
                    if (getToken === null) {
                        navigation.navigate('LandingPage');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.profileContainer },
        react_1["default"].createElement(react_native_1.View, { style: styles.profile },
            react_1["default"].createElement(react_native_1.View, { style: styles.img },
                react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } },
                    react_1["default"].createElement(react_native_1.View, { style: styles.bgImg }, (userData === null || userData === void 0 ? void 0 : userData.avatar) ? (react_1["default"].createElement(react_native_1.Image, { style: styles.avatar, source: { uri: userData.avatar } })) : null),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.contentImg }, userData === null || userData === void 0 ? void 0 : userData.name)),
                react_1["default"].createElement(react_native_1.View, { style: { marginHorizontal: 10 } },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.contentImg }, userData === null || userData === void 0 ? void 0 : userData.email),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.contentImg }, userData === null || userData === void 0 ? void 0 : userData.phone),
                    react_1["default"].createElement(react_native_1.View, { style: styles.preventProfile },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.contentPrevent }, "Edit Profile")))),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.View, { style: styles.namecontain },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/balance.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.name }, "Balance"),
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/large.png') })),
                    react_1["default"].createElement(react_native_1.View, { style: styles.namecontain },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/data.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.name }, "Sync"),
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/large.png') }))),
                react_1["default"].createElement(react_native_1.View, { style: styles.line }),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.View, { style: styles.namecontain },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/language.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.name }, "Language"),
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/large.png') })),
                    react_1["default"].createElement(react_native_1.View, { style: styles.namecontain },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/sync.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.name }, "Security"),
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/large.png') }))),
                react_1["default"].createElement(react_native_1.View, { style: styles.line }),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.View, { style: styles.namecontain },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/any.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.name }, "About"),
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/large.png') })),
                    react_1["default"].createElement(react_native_1.View, { style: styles.namecontain },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/feedback.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.name }, "Feedback"),
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/large.png') }))),
                react_1["default"].createElement(react_native_1.View, { style: styles.line }),
                react_1["default"].createElement(react_native_1.View, null,
                    react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.namecontain, onPress: handleLogout },
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/logout.png') }),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.name }, "Log out"),
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_profile/large.png') })))))));
};
exports["default"] = MyAccount;
var styles = react_native_1.StyleSheet.create({
    profileContainer: {
        flex: 1
    },
    profile: {
        marginHorizontal: 40,
        marginVertical: 20
    },
    img: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bgImg: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: '#0D986A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentImg: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    preventProfile: {
        width: 126,
        height: 38,
        backgroundColor: '#0D986A',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentPrevent: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    name: {
        fontSize: 14,
        color: '#000000'
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'black',
        marginVertical: 10
    },
    namecontain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    }
});
