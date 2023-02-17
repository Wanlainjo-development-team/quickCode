import { StyleSheet, Dimensions } from "react-native";
import color from "../../color";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.mainBackground,
    },

    headBackground: {
        width,
        height: height * 0.3,
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
    }
})