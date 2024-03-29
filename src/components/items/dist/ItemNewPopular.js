"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var react_native_snap_carousel_1 = require("react-native-snap-carousel");
var useAutoplay_1 = require("../../hooks/useAutoplay");
var useFetchInfoTrees_1 = require("../../hooks/useFetchInfoTrees");
var width = react_native_1.Dimensions.get('window').width;
var ItemNewPopular = function () {
    var _a = useFetchInfoTrees_1["default"](), carouselData = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    var carouselRef = react_1.useRef(null);
    var _b = react_1.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    useAutoplay_1["default"]((carouselData === null || carouselData === void 0 ? void 0 : carouselData.length) || 0, currentIndex, setCurrentIndex);
    if (isLoading) {
        return react_1["default"].createElement(react_native_1.Text, { style: { marginHorizontal: 20 } }, "Loading...");
    }
    if (isError) {
        return react_1["default"].createElement(react_native_1.Text, { style: styles.load }, "Error loading data");
    }
    if (!carouselData || carouselData.length === 0) {
        return react_1["default"].createElement(react_native_1.Text, { style: styles.load }, "No data available");
    }
    return (react_1["default"].createElement(react_native_snap_carousel_1["default"], { data: carouselData || [], renderItem: function (_a) {
            var item = _a.item;
            return (react_1["default"].createElement(react_native_1.View, { style: styles.imgTitle },
                react_1["default"].createElement(react_native_1.ImageBackground, { source: { uri: item.image }, style: styles.img },
                    react_1["default"].createElement(react_native_1.View, { style: styles.imgContent },
                        react_1["default"].createElement(react_native_1.Text, { style: styles.content }, item.name),
                        react_1["default"].createElement(react_native_1.Text, { style: styles.contentdescription }, item.description)))));
        }, ref: carouselRef, sliderWidth: width, itemWidth: width - 30, loop: true, autoplayInterval: 3000, enableSnap: true, onSnapToItem: function (index) { return setCurrentIndex(index); }, autoplay: true }));
};
exports["default"] = ItemNewPopular;
var styles = react_native_1.StyleSheet.create({
    title: {
        fontSize: 30,
        color: 'black'
    },
    contentitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    imgTitle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 345,
        height: 308,
        borderRadius: 20
    },
    content: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    imgContent: {
        marginHorizontal: 24,
        marginTop: 170
    },
    contentdescription: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        height: 80
    },
    popularproduct: {
        marginTop: 5,
        marginBottom: 50
    },
    load: {
        alignItems: "center",
        justifyContent: "center"
    }
});
