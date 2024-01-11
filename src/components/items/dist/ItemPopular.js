"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var useFetchInfoTrees_1 = require("../../hooks/useFetchInfoTrees");
var ItemPopular = function () {
    var api = 'https://e1f3-14-176-231-248.ngrok-free.app/api/get-products';
    var _a = useFetchInfoTrees_1["default"](api), data = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    var _b = react_1.useState([]), shuffledData = _b[0], setShuffledData = _b[1];
    var navigation = native_1.useNavigation();
    var shuffleArray = function (array) {
        var _a;
        var newArray = __spreadArrays(array);
        for (var i = newArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [newArray[j], newArray[i]], newArray[i] = _a[0], newArray[j] = _a[1];
        }
        return newArray;
    };
    react_1.useEffect(function () {
        if (data && data.length > 0) {
            var shuffled = shuffleArray(data);
            setShuffledData(shuffled);
        }
    }, [data, isLoading, isError]);
    if (isLoading) {
        return react_1["default"].createElement(react_native_1.Text, null, "Loading...");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, null, "Error loading data");
    }
    if (!shuffledData || shuffledData.length === 0) {
        return react_1["default"].createElement(react_native_1.Text, null, "No data available");
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.dropped },
        react_1["default"].createElement(react_native_1.FlatList, { data: shuffledData.slice(0, 3), keyExtractor: function (item) { return item.id.toString(); }, renderItem: function (_a) {
                var item = _a.item;
                return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.droppedTree, onPress: function () {
                        return navigation.navigate('DetailProduct', { product: item });
                    } },
                    react_1["default"].createElement(react_native_1.Image, { source: { uri: item.image }, style: styles.droppedImg }),
                    react_1["default"].createElement(react_native_1.Text, { style: styles.nameTree }, item.name),
                    react_1["default"].createElement(react_native_1.Text, null,
                        item.promotion_price === item.price ? (react_1["default"].createElement(react_native_1.Text, { style: styles.price },
                            "$",
                            item.price)) : (react_1["default"].createElement(react_native_1.Text, { style: styles.price },
                            "$",
                            item.promotion_price)),
                        item.promotion_price !== item.price && (react_1["default"].createElement(react_native_1.Text, { style: styles.originalPrice },
                            "$",
                            item.price)))));
            }, horizontal: true, showsHorizontalScrollIndicator: true })));
};
exports["default"] = ItemPopular;
var styles = react_native_1.StyleSheet.create({
    dropped: {
        marginTop: 5,
        flexDirection: 'row'
    },
    droppedTree: {
        width: 150,
        height: 'auto',
        marginHorizontal: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#0D986A',
        top: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    },
    droppedImg: {
        width: 150,
        height: 150,
        borderRadius: 10
    },
    nameTree: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        marginHorizontal: 5
    },
    originalPrice: {
        textDecorationLine: 'line-through',
        color: 'red'
    },
    price: {
        color: '#002140',
        fontSize: 12
    }
});
