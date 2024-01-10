"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_maps_1 = require("react-native-maps");
var Map = function () {
    var _a = react_1.useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }), region = _a[0], setRegion = _a[1];
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_maps_1["default"], { style: styles.map, initialRegion: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }, 
            //onRegionChangeComplete runs when the user stops dragging MapView
            onRegionChangeComplete: function (region) { return setRegion(region); } }),
        react_1["default"].createElement(react_native_1.Text, null,
            "Current latitude: ",
            region.latitude),
        react_1["default"].createElement(react_native_1.Text, null,
            "Current longitude: ",
            region.longitude)));
};
exports["default"] = Map;
var styles = react_native_1.StyleSheet.create({
    container: __assign(__assign({}, react_native_1.StyleSheet.absoluteFillObject), { flex: 1, justifyContent: "flex-end", alignItems: "center" }),
    map: __assign({}, react_native_1.StyleSheet.absoluteFillObject)
});
