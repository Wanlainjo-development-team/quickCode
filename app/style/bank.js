import { StyleSheet, StatusBar, Dimensions } from "react-native";
import color from "./color";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `${color.black}20`,
        justifyContent: "flex-end",
    },

    goBack: {
        flex: 1,
    },

    sheet: {
        minHeight: 300,
        maxHeight: height - StatusBar.currentHeight,
        backgroundColor: color.background,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    head: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginVertical: 20,
    },

    headTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: color.accent,
    },

    goBackButton: {
        width: 45,
        height: 45,
        borderRadius: 15,
        backgroundColor: `${color.accent}20`,
        alignItems: "center",
        justifyContent: "center",
    }
})