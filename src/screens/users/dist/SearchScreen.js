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
var native_1 = require("@react-navigation/native");
var useFetchInfoTrees_1 = require("../../hooks/useFetchInfoTrees");
var lodash_1 = require("lodash");
var SearchScreen = function (_a) {
    var searchText = _a.searchText;
    var navigation = native_1.useNavigation();
    var _b = useFetchInfoTrees_1["default"](), treesData = _b.data, isLoading = _b.isLoading, isError = _b.isError;
    var _c = react_1.useState([]), searchResults = _c[0], setSearchResults = _c[1];
    var searchTrees = function (text) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, treesData.filter(function (item) {
                    return item.name.toLowerCase().includes(text.toLowerCase());
                })];
        });
    }); };
    var handleSearchChange = lodash_1.debounce(function (text) { return __awaiter(void 0, void 0, void 0, function () {
        var filteredResults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, searchTrees(text)];
                case 1:
                    filteredResults = _a.sent();
                    setSearchResults(filteredResults);
                    return [2 /*return*/];
            }
        });
    }); }, 300);
    var renderItem = function (_a) {
        var item = _a.item;
        return (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.popularTree, onPress: function () { return navigation.navigate('DetailProduct', { product: item }); } },
                react_1["default"].createElement(react_native_1.Image, { source: typeof item.image === 'number'
                        ? item.image
                        : { uri: item.image }, style: styles.popularImg }),
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
                        react_1["default"].createElement(react_native_1.Image, { source: require('../../assets/img_popular/plus.png'), style: styles.plusImg }))))));
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.SearchBarContainer },
        react_1["default"].createElement(react_native_1.View, { style: styles.SearchInput },
            react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Search by name", value: searchText, onChangeText: function (text) { return handleSearchChange(text); }, style: styles.searchInput })),
        react_1["default"].createElement(react_native_1.FlatList, { data: searchResults, keyExtractor: function (item) { return item.id; }, renderItem: renderItem })));
};
var styles = react_native_1.StyleSheet.create({
    SearchBarContainer: {
        flex: 1
    },
    searchInput: {
        height: 50,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10,
        width: '100%',
        backgroundColor: '#DCE8D6'
    },
    SearchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    popularTree: {
        width: '90%',
        height: 100,
        backgroundColor: '#DCE8D6',
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 20,
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
    }
});
exports["default"] = SearchScreen;
