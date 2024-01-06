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
var axios_1 = require("axios");
var react_native_1 = require("react-native");
var react_1 = require("react");
var async_storage_1 = require("@react-native-async-storage/async-storage");
function useWishList() {
    var _this = this;
    var _a = react_1.useState([]), dataWishList = _a[0], setDataWishList = _a[1];
    var _b = react_1.useState(), userData = _b[0], setUserData = _b[1];
    var getUserData = function () { return __awaiter(_this, void 0, void 0, function () {
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
                    console.log('Error:', e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        getUserData();
    }, []);
    var fetchWishList = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!(userData && userData.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios_1["default"].get("https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist?user_id=" + (userData === null || userData === void 0 ? void 0 : userData.id))];
                case 1:
                    response = _a.sent();
                    // console.log('API Response:', response);
                    setDataWishList(response.data || []);
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (userData && userData.id) {
            fetchWishList();
        }
    }, [userData]);
    var removeItemFromWishList = function (_a) {
        var itemId = _a.itemId;
        return __awaiter(_this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"]["delete"]("https://645f33db9d35038e2d1ec62a.mockapi.io/wishlist/" + itemId)];
                    case 1:
                        response = _b.sent();
                        if (response.status === 200) {
                            react_native_1.Alert.alert('Item removed successfully');
                            setDataWishList(function (prevData) {
                                return prevData.filter(function (item) { return item.id !== itemId; });
                            });
                        }
                        else {
                            console.error('Error removing item from wish list. Status:', response.status);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        if (error_2.response) {
                            console.error('Server responded with an error status:', error_2.response.status);
                            console.error('Error data:', error_2.response.data);
                        }
                        else if (error_2.request) {
                            console.error('No response received from the server');
                        }
                        else {
                            console.error('Error setting up the request:', error_2.message);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    react_1.useEffect(function () {
        fetchWishList();
    }, []);
    return { dataWishList: dataWishList, userData: userData, removeItemFromWishList: removeItemFromWishList };
}
exports["default"] = useWishList;
