import { StyleSheet, Dimensions } from "react-native";
import color from "./color";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.mainBackground,
    },

    codeList: {
        height: height * 0.7,
        marginTop: 10,
    },

    codeCard: {
        backgroundColor: color.accentLighten1,
        paddingLeft: 10,
        paddingRight: 10,
        marginHorizontal: 10,
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
        paddingHorizontal: 10,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },

    codeCardButtonText: {
        color: color.white,
        fontSize: 12,
        fontWeight: "bold",
    },

    codeCardName: {
        color: color.accent,
        fontSize: 14,
        fontWeight: "bold",
    }
})