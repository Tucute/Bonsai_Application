"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_maps_1 = require("react-native-maps");
var MapComponent = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_maps_1["default"], { style: { width: '100%', height: '100%' }, initialRegion: {
                latitude: 15.942386,
                longitude: 108.012135,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }, onRegionChange: function (x) {
                console.log(x);
            } })));
};
exports["default"] = MapComponent;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
