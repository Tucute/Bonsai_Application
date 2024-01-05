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
var react_native_document_picker_1 = require("react-native-document-picker");
var UploadImage = function () {
    var _a = react_1.useState(null), singleFile = _a[0], setSingleFile = _a[1];
    var uploadImage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData, res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(singleFile != null)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    formData = new FormData();
                    formData.append('image', {
                        uri: react_native_1.Platform.OS === 'android' ? "file://" + singleFile.uri : singleFile.uri,
                        type: singleFile.type || 'image/jpeg',
                        name: singleFile.name || 'image.jpg'
                    });
                    return [4 /*yield*/, fetch('https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/UploadFile', {
                            method: 'POST',
                            body: formData,
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                            timeout: 5000
                        })];
                case 2:
                    res = _a.sent();
                    // Check the response status
                    if (res.status === 201) {
                        react_native_1.Alert.alert('Upload Successful');
                    }
                    else {
                        react_native_1.Alert.alert('Upload Failed');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error uploading file:', error_1);
                    react_native_1.Alert.alert('Error uploading file');
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    // If no file selected then show alert
                    react_native_1.Alert.alert('Please Select File first');
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var selectFile = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, react_native_document_picker_1["default"].pick({
                            type: [react_native_document_picker_1["default"].types.allFiles]
                        })];
                case 1:
                    res = _a.sent();
                    // Printing the log related to the file
                    console.log('res :', res);
                    // Setting the state to show single file attributes
                    setSingleFile(res);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    setSingleFile(null);
                    // Handling any exception (If any)
                    if (react_native_document_picker_1["default"].isCancel(err_1)) {
                        // If the user canceled the document selection
                        react_native_1.Alert.alert('Canceled');
                    }
                    else {
                        // For Unknown Error
                        react_native_1.Alert.alert('Unknown Error: ' + JSON.stringify(err_1));
                        throw err_1;
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.mainBody },
        react_1["default"].createElement(react_native_1.View, { style: { alignItems: 'center' } },
            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: 30, textAlign: 'center' } }, "React Native File Upload Example"),
            react_1["default"].createElement(react_native_1.Text, { style: {
                    fontSize: 25,
                    marginTop: 20,
                    marginBottom: 30,
                    textAlign: 'center'
                } }, "www.aboutreact.com")),
        singleFile != null ? (react_1["default"].createElement(react_native_1.Text, { style: styles.textStyle },
            "File Name: ",
            singleFile.name ? singleFile.name : '',
            '\n',
            "Type: ",
            singleFile.type ? singleFile.type : '',
            '\n',
            "File Size: ",
            singleFile.size ? singleFile.size : '',
            '\n',
            "URI: ",
            singleFile.uri ? singleFile.uri : '',
            '\n')) : null,
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.buttonStyle, activeOpacity: 0.5, onPress: selectFile },
            react_1["default"].createElement(react_native_1.Text, { style: styles.buttonTextStyle }, "Select File")),
        react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.buttonStyle, activeOpacity: 0.5, onPress: uploadImage },
            react_1["default"].createElement(react_native_1.Text, { style: styles.buttonTextStyle }, "Upload File"))));
};
var styles = react_native_1.StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16
    },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center'
    }
});
exports["default"] = UploadImage;
// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Alert,
//   Button,
// } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// const UploadImage = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const selectImage = async () => {
//     try {
//       const document = await DocumentPicker.pick({
//         type: [DocumentPicker.types.images],
//       });
//       console.log(document);
//       const apiURL =
//         'https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/UploadFile';
//       const formData = new FormData();
//       formData.append('image', {
//         uri: document.uri,
//         name: document.name,
//         type: document.type,
//         size:document.size,
//       });
//       const response = await fetch(apiURL, {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       if (response.ok) {
//         console.log('Image uploaded successfully!');
//       } else {
//         console.log('Image upload failed!');
//       }
//     } catch (error) {
//       console.error('Error selecting/uploading image', error);
//     }
//   };
//   return (
//     <View>
//       <Text>Selected Image:{selectedImage ? selectedImage.name : 'none'}</Text>
//       <Button title="Select Image" onPress={selectImage}></Button>
//     </View>
//   );
// };
// const styles = StyleSheet.create({});
// export default UploadImage;
