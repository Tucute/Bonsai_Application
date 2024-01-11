"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_webview_1 = require("react-native-webview");
var Chat = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: { flex: 1 } },
        react_1["default"].createElement(react_native_webview_1.WebView, { source: { uri: "https://tawk.to/chat/6598c7cd8d261e1b5f502a49/1hjecov43" }, style: { flex: 1 } })));
};
exports["default"] = Chat;
var styles = react_native_1.StyleSheet.create({});
