import { StyleSheet, StatusBar, Dimensions } from "react-native";
import color from "./color";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },

    card: {
        backgroundColor: `${color.accent}20`,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    leftSide: {
        flexDirection: "row",
        alignItems: "center"
    },

    iconContainer: {
        backgroundColor: color.white,
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },

    bankName: {
        fontSize: 14,
        color: color.accent,
        fontWeight: "bold"
    },

    bankCode: {
        fontSize: 12,
        color: color.accent,
        fontWeight: "bold"
    }
})