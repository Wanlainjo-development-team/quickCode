import { StyleSheet, StatusBar, Dimensions } from "react-native";
import color from "./color";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    headBackground: {
        width,
        height: height * 0.17,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headBackgroundFlex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
    },

    headBackgroundLogo: {
        width: 50,
        height: 50,
    },

    headBackgroundText: {
        color: color.white,
        fontSize: 20,
        fontWeight: "900",
        marginLeft: 10,
    },

    menuButton: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    }
})