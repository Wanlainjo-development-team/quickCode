import { StyleSheet, Dimensions } from "react-native";
import color from "./color";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.mainBackground,
    },

    headBackground: {
        width,
        height: height * 0.17,
        justifyContent: "center",
        paddingHorizontal: 20,
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

    codeList: {
        height: height * 0.7,
        marginTop: 20,
    },

    codeCard: {
        backgroundColor: color.accentLighten1,
        paddingLeft: 10,
        paddingRight: 20,
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 10,
        height: 55,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    codeCardButton: {
        backgroundColor: color.accent,
        height: 35,
        paddingHorizontal: 20,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },

    codeCardButtonText: {
        color: color.white,
        fontSize: 12,
    },

    codeCardName: {
        color: color.accent,
        fontSize: 15,
    }
})