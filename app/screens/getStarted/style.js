import { StyleSheet } from 'react-native';
import color from '../../color';

const getStarted = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },

    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    textContainerTitle: {
        fontSize: 40,
        fontWeight: '900',
        color: color.white,
    },

    textContainerSubtitle: {
        fontSize: 20,
        fontWeight: '400',
        color: color.white,
    },

    getStartedButton: {
        height: 55,
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: color.accent,
    },
    
    getStartedButtonBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    getStartedButtonText: {
        color: color.white,
        fontSize: 18,
        fontWeight: '900',
    }
});

export default getStarted;