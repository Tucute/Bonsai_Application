"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var useCartStore_1 = require("../../store/useCartStore");
var ItemProductCart = function (_a) {
    var item = _a.item;
    var removeFromCart = useCartStore_1["default"](function (state) { return state.removeFromCart; });
    var updatePlusQuantity = useCartStore_1["default"](function (state) { return state.updatePlusQuantity; });
    var updateMinusQuantity = useCartStore_1["default"](function (state) { return state.updateMinusQuantity; });
    var handleUpdatePlusQuantity = function () {
        updatePlusQuantity(item.id);
    };
    var handleUpdateMinusQuantity = function () {
        updateMinusQuantity(item.id);
    };
    var handleRemove = function () {
        removeFromCart(item.id);
    };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.item },
        react_1["default"].createElement(react_native_1.Image, { style: styles.imageProduct, source: {
                uri: item.image
            } }),
        react_1["default"].createElement(react_native_1.View, { style: styles.middleSection },
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { numberOfLines: 2, style: styles.name }, item.name),
                react_1["default"].createElement(react_native_1.Text, { style: styles.subname }, "Monstera family")),
            react_1["default"].createElement(react_native_1.View, { style: styles.updateQuantity },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.plus, onPress: handleUpdatePlusQuantity },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.icon }, "+")),
                react_1["default"].createElement(react_native_1.Text, { style: styles.quantity }, item.quantity),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.plus, onPress: handleUpdateMinusQuantity },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.icon }, "-")))),
        react_1["default"].createElement(react_native_1.View, { style: styles.lastSection },
            react_1["default"].createElement(react_native_1.Text, { style: styles.price },
                "$ ",
                item.price * item.quantity),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleRemove },
                react_1["default"].createElement(react_native_1.Image, { style: styles.iconRemove, source: {
                        uri: 'https://cdn-icons-png.flaticon.com/512/3405/3405244.png'
                    } })))));
};
var styles = react_native_1.StyleSheet.create({
    item: {
        borderRadius: 15,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#DCE8D6',
        // width: 349,
        height: 103
    },
    imageProduct: {
        borderRadius: 15,
        width: 100,
        height: 100,
        objectFit: 'cover'
    },
    middleSection: {
        justifyContent: 'space-around',
        height: '100%',
        width: 150,
        paddingHorizontal: 10
    },
    name: {
        color: '#000',
        fontSize: 14,
        fontWeight: '600'
    },
    subname: {
        color: '#002140',
        fontWeight: '400',
        fontSize: 12
    },
    updateQuantity: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        fontWeight: 'bold',
        marginHorizontal: 15
    },
    plus: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        alignItems: 'center'
    },
    icon: {
        color: '#000',
        fontWeight: 'bold'
    },
    lastSection: {
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginRight: 10
    },
    iconRemove: {
        width: 20,
        height: 20
    },
    price: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000'
    }
});
exports["default"] = ItemProductCart;
